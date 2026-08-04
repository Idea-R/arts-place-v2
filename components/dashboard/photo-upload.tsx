"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ImagePlus, X, Loader2 } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

/**
 * Dish photo upload.
 *
 * Uploads straight from the browser to Supabase Storage and hands the public URL
 * back to the form as a hidden field, so saving the dish is still one submit.
 *
 * Written for someone standing in a kitchen with a phone:
 * - accept="image/*" with capture support, so mobile offers the camera
 * - the preview is shown from a local object URL immediately, before the upload
 *   finishes, because a slow connection should not look like a broken button
 * - size and type are checked here for a friendly message, and again by the bucket,
 *   which is what actually enforces them
 */
export function PhotoUpload({
  name = "photo_url",
  initialUrl,
  label = "Photo",
}: {
  name?: string
  initialUrl?: string | null
  label?: string
}) {
  const [url, setUrl] = useState<string | null>(initialUrl ?? null)
  const [preview, setPreview] = useState<string | null>(initialUrl ?? null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const MAX_BYTES = 5 * 1024 * 1024

  const handleFile = async (file: File) => {
    setError("")

    if (!file.type.startsWith("image/")) {
      setError("That is not an image file.")
      return
    }
    if (file.size > MAX_BYTES) {
      setError(
        `That photo is ${(file.size / 1024 / 1024).toFixed(1)} MB. The limit is 5 MB. Most phones can email or share a smaller copy.`,
      )
      return
    }

    const localPreview = URL.createObjectURL(file)
    setPreview(localPreview)
    setBusy(true)

    try {
      const supabase = createClient()
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase()
      // Random path rather than the original filename: two people photographing
      // "lasagna.jpg" should not overwrite each other.
      const path = `dishes/${crypto.randomUUID()}.${ext}`

      const { error: upErr } = await supabase.storage
        .from("dish-photos")
        .upload(path, file, { cacheControl: "3600", upsert: false })

      if (upErr) {
        setError(upErr.message)
        setPreview(url)
        return
      }

      const { data } = supabase.storage.from("dish-photos").getPublicUrl(path)
      setUrl(data.publicUrl)
      setPreview(data.publicUrl)
    } catch (e: any) {
      setError(e?.message || "Upload failed. Try again.")
      setPreview(url)
    } finally {
      setBusy(false)
    }
  }

  const clear = () => {
    setUrl(null)
    setPreview(null)
    setError("")
    if (inputRef.current) inputRef.current.value = ""
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      {/* What the form actually submits. */}
      <input type="hidden" name={name} value={url ?? ""} />

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) handleFile(f)
        }}
      />

      {preview ? (
        <div className="relative w-full max-w-xs">
          {/* Storage URLs are remote and next.config has images unoptimized, so a
              plain img is correct here. */}
          <img
            src={preview}
            alt="Dish photo"
            className="w-full h-40 object-cover rounded-md border"
          />
          {busy && (
            <div className="absolute inset-0 flex items-center justify-center rounded-md bg-background/70">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
            </div>
          )}
          <div className="mt-2 flex gap-2">
            <Button type="button" variant="outline" size="sm" onClick={() => inputRef.current?.click()} disabled={busy}>
              Replace
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={clear} disabled={busy}>
              <X className="h-4 w-4 mr-1" />
              Remove
            </Button>
          </div>
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          className="w-full max-w-xs h-28 border-dashed flex-col gap-2"
        >
          {busy ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <ImagePlus className="h-5 w-5" />
              <span className="text-sm font-normal">Add a photo</span>
              <span className="text-xs text-muted-foreground">JPG, PNG or HEIC, up to 5 MB</span>
            </>
          )}
        </Button>
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
