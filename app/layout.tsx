import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "API Deprecation Timeline Tracker",
  description: "Track API deprecation timelines across providers. Monitor announcements, plan migrations, and never miss a deadline."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b901cbf3-851d-407f-9a37-d8b9ca7958b0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
