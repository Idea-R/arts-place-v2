import { redirect } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { MenuManager } from "@/components/dashboard/menu-manager"
import { SpecialsManager } from "@/components/dashboard/specials-manager"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signOut } from "./actions"
import { ExternalLink, UtensilsCrossed, CalendarDays, History } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/admin")

  const { data: member } = await supabase
    .from("team_members")
    .select("full_name, email, role")
    .eq("id", user.id)
    .maybeSingle()

  // An auth account without a team_members row sees nothing anyway, thanks to row
  // level security, but bouncing them is clearer than an empty dashboard.
  if (!member) redirect("/admin")

  const [{ data: categories }, { data: specials }, { data: recent }] = await Promise.all([
    supabase
      .from("menu_categories")
      .select("id, name, sort_order, menu_items(id, name, description, price, is_signature, is_available, category_id, photo_url, sort_order)")
      .order("sort_order"),
    supabase.from("daily_specials").select("*").order("starts_on", { ascending: false }).limit(25),
    supabase.from("change_log").select("actor_email, entity, action, detail, created_at").order("created_at", { ascending: false }).limit(12),
  ])

  const cats = (categories ?? []).map((c: any) => ({
    id: c.id,
    name: c.name,
    items: (c.menu_items ?? []).sort((a: any, b: any) => a.sort_order - b.sort_order),
  }))
  const itemCount = cats.reduce((n, c) => n + c.items.length, 0)
  const liveSpecials = (specials ?? []).filter((s: any) => {
    const today = new Date().toISOString().slice(0, 10)
    return s.is_active && s.starts_on <= today && (!s.ends_on || s.ends_on >= today)
  }).length

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-xl font-bold">Art&rsquo;s Place</h1>
            <p className="text-sm text-muted-foreground">
              Signed in as {member.full_name || member.email}
              <span className="mx-2">&middot;</span>
              {member.role}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/menu" target="_blank">
              <Button variant="outline" size="sm">
                View the live menu
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <form action={signOut}>
              <Button variant="ghost" size="sm" type="submit">
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <Card>
            <CardContent className="p-5">
              <UtensilsCrossed className="h-5 w-5 text-primary mb-2" />
              <div className="text-2xl font-bold">{itemCount}</div>
              <div className="text-sm text-muted-foreground">dishes on the menu</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CalendarDays className="h-5 w-5 text-primary mb-2" />
              <div className="text-2xl font-bold">{liveSpecials}</div>
              <div className="text-sm text-muted-foreground">specials running today</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <History className="h-5 w-5 text-primary mb-2" />
              <div className="text-2xl font-bold">{recent?.length ?? 0}</div>
              <div className="text-sm text-muted-foreground">recent changes</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="menu">
          <TabsList className="mb-6">
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="specials">Daily specials</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="menu">
            <MenuManager categories={cats} />
          </TabsContent>

          <TabsContent value="specials">
            <SpecialsManager specials={(specials ?? []) as any} />
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Who changed what. A shared login is normal in a restaurant, so this is how you tell
                  who moved a price.
                </p>
                {(recent ?? []).length === 0 ? (
                  <p className="text-sm text-muted-foreground">No changes recorded yet.</p>
                ) : (
                  <ul className="space-y-3">
                    {(recent ?? []).map((r: any, i: number) => (
                      <li key={i} className="text-sm flex gap-3 border-b pb-2 last:border-0">
                        <span className="text-muted-foreground whitespace-nowrap">
                          {new Date(r.created_at).toLocaleString()}
                        </span>
                        <span className="font-medium">{r.actor_email ?? "unknown"}</span>
                        <span className="text-muted-foreground">
                          {r.action} {r.entity}
                          {r.detail?.name ? `: ${r.detail.name}` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
