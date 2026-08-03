import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, preferences } = await request.json()

    // TODO: Integrate with actual email service (Mailchimp, ConvertKit, etc.)
    console.log("New subscriber:", { email, preferences })

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // In a real implementation, you would:
    // 1. Validate email format
    // 2. Check if email already exists
    // 3. Add to email service provider
    // 4. Send welcome email with discount code
    // 5. Store in database

    // No discount code is issued. The restaurant never authorised a promotional
    // offer, and nothing here sends an email or stores the address.
    return NextResponse.json({
      success: true,
      message: "Subscription received (demo only, nothing is stored)",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ success: false, message: "Failed to subscribe" }, { status: 500 })
  }
}
