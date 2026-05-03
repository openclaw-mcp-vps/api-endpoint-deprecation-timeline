export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          API Monitoring
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track API Deprecation Timelines
          <span className="text-[#58a6ff]"> Across Providers</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Monitor deprecation announcements from major API providers, get actionable migration timelines, and never be caught off guard by a breaking change.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $11/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No lock-in.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 gap-4 mb-20 sm:grid-cols-3">
        {[
          { title: "Auto-Detection", desc: "Scans provider docs and changelogs for deprecation notices automatically." },
          { title: "Migration Timelines", desc: "Converts sunset dates into prioritized migration checklists for your stack." },
          { title: "Instant Alerts", desc: "Webhooks and email alerts when a tracked API announces deprecation." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2 uppercase tracking-wide">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited API endpoints tracked",
              "Deprecation auto-detection",
              "Migration timeline dashboard",
              "Webhook + email alerts",
              "Impact analysis reports",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Start Tracking Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which API providers are supported?",
              a: "We monitor all major providers including AWS, Google Cloud, Stripe, Twilio, GitHub, and dozens more. You can also add custom endpoints."
            },
            {
              q: "How quickly are deprecations detected?",
              a: "Our scanner checks provider documentation and changelogs every hour. You'll receive an alert within 60 minutes of a new deprecation announcement."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        © {new Date().getFullYear()} API Deprecation Timeline. All rights reserved.
      </footer>
    </main>
  )
}
