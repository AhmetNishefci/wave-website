import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Wave",
  description: "How Wave collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy — Wave",
    description: "How Wave collects, uses, and protects your personal information.",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-wave-muted mb-12">Last updated: March 15, 2026</p>

      <div className="prose prose-sm prose-invert max-w-none space-y-8 text-wave-text leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
          <p className="text-wave-muted">
            Wave (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Wave mobile application (the &quot;App&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the App. By using Wave, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>

          <h3 className="text-base font-semibold text-white mt-4 mb-2">2.1 Account Information</h3>
          <p className="text-wave-muted">
            When you create an account, we collect your email address (via Apple, Google, or Phone sign-in), date of birth, and gender. Date of birth and gender are collected once during signup and cannot be changed. Your date of birth is used solely to verify you are at least 18 years old.
          </p>

          <h3 className="text-base font-semibold text-white mt-4 mb-2">2.2 Social Media Handles</h3>
          <p className="text-wave-muted">
            You voluntarily provide your Instagram username and/or Snapchat username. These are stored on our servers and shared only with users you mutually match with. They are never displayed publicly or shared with third parties.
          </p>

          <h3 className="text-base font-semibold text-white mt-4 mb-2">2.3 Bluetooth Data</h3>
          <p className="text-wave-muted">
            Wave uses Bluetooth Low Energy (BLE) to discover nearby users. Your device broadcasts an ephemeral token — a random identifier that changes every 15 minutes. This token cannot be used to identify you personally and is not linked to your real identity until a mutual match occurs. We do not collect or store Bluetooth signal data on our servers.
          </p>

          <h3 className="text-base font-semibold text-white mt-4 mb-2">2.4 Location Data</h3>
          <p className="text-wave-muted">
            Wave does <strong>not</strong> track your GPS location for core functionality. If you opt in to &quot;Nearby Alerts,&quot; your approximate location is sent to our server temporarily to check if other Wave users are in your area. This data is used in real-time only and is not stored permanently. Your location is never shared with other users.
          </p>

          <h3 className="text-base font-semibold text-white mt-4 mb-2">2.5 Notes</h3>
          <p className="text-wave-muted">
            You may optionally set a short note (up to 40 characters) that is visible to nearby Wave users on their radar. This note is ephemeral and tied to your current session. It is not permanently stored after your ephemeral token expires.
          </p>

          <h3 className="text-base font-semibold text-white mt-4 mb-2">2.6 Device Information</h3>
          <p className="text-wave-muted">
            We collect your device&apos;s push notification token (for sending notifications), timezone (for delivering notifications at appropriate times), and preferred language (for localized content).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2 text-wave-muted">
            <li>To create and manage your account</li>
            <li>To facilitate mutual matching between users</li>
            <li>To share social media handles with mutual matches only</li>
            <li>To send push notifications (wave alerts, match notifications, proximity alerts)</li>
            <li>To enforce our age requirement (18+)</li>
            <li>To process block and report requests for user safety</li>
            <li>To respond to support tickets submitted through the App</li>
            <li>To improve the App&apos;s performance and user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
          <p className="text-wave-muted">
            We do not sell, trade, or rent your personal information to third parties. Your social media handles are shared only with users you mutually match with. We may share data with:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-wave-muted mt-2">
            <li><strong>Supabase:</strong> Our backend infrastructure provider, which hosts our database and authentication services (hosted in the EU).</li>
            <li><strong>Expo / Apple / Google:</strong> For push notification delivery.</li>
            <li><strong>Law enforcement:</strong> If required by law or to protect the safety of our users.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
          <p className="text-wave-muted">
            Your account data is retained as long as your account is active. Ephemeral tokens expire after 15 minutes and are automatically deleted. Wave records (pending waves) expire after 15 minutes. Match history is retained until you or the other user removes the match. You can delete your account at any time from the Settings screen, which permanently removes all your data from our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights (GDPR)</h2>
          <p className="text-wave-muted">
            If you are located in the European Economic Area (EEA), you have the following rights:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-wave-muted mt-2">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data.</li>
            <li><strong>Erasure:</strong> Request deletion of your data (also available via in-app account deletion).</li>
            <li><strong>Portability:</strong> Request your data in a machine-readable format.</li>
            <li><strong>Objection:</strong> Object to processing of your data for specific purposes.</li>
          </ul>
          <p className="text-wave-muted mt-2">
            To exercise these rights, contact us at <a href="mailto:support@wave-app.com" className="text-wave-primary hover:underline">support@wave-app.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Security</h2>
          <p className="text-wave-muted">
            We implement industry-standard security measures including encrypted connections (TLS), Row Level Security on all database tables, and SECURITY DEFINER functions that prevent unauthorized data access. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
          <p className="text-wave-muted">
            Wave is not intended for anyone under the age of 18. We do not knowingly collect personal information from children under 18. If we discover that a child under 18 has provided us with personal information, we will delete it immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
          <p className="text-wave-muted">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy in the App and updating the &quot;Last updated&quot; date above.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
          <p className="text-wave-muted">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:support@wave-app.com" className="text-wave-primary hover:underline">
              support@wave-app.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
