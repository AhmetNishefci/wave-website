import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Wave",
  description: "Terms and conditions for using the Wave app.",
  openGraph: {
    title: "Terms of Service — Wave",
    description: "Terms and conditions for using the Wave app.",
    type: "website",
  },
};

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-sm text-wave-muted mb-12">Last updated: March 15, 2026</p>

      <div className="prose prose-sm prose-invert max-w-none space-y-8 text-wave-text leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p className="text-wave-muted">
            By downloading, installing, or using Wave (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App. We reserve the right to modify these Terms at any time, and your continued use of the App constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Eligibility</h2>
          <p className="text-wave-muted">
            You must be at least 18 years of age to use Wave. By creating an account, you represent and warrant that you are at least 18 years old. We verify your date of birth during signup. If we determine that you are under 18, your account will be immediately suspended.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Account Registration</h2>
          <p className="text-wave-muted">
            You may create an account using Apple Sign-In, Google Sign-In, or phone number verification. You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information during registration, including your date of birth and gender, which cannot be changed after signup.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h2>
          <p className="text-wave-muted">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2 text-wave-muted mt-2">
            <li>Use Wave for any illegal or unauthorized purpose</li>
            <li>Harass, abuse, or threaten other users</li>
            <li>Impersonate another person or provide false information</li>
            <li>Use the App if you are under 18 years of age</li>
            <li>Attempt to reverse-engineer, decompile, or extract the source code of the App</li>
            <li>Interfere with or disrupt the App&apos;s infrastructure</li>
            <li>Create multiple accounts or use automated tools to interact with the App</li>
            <li>Send spam waves or engage in any form of abuse through the wave/match system</li>
            <li>Use the App to stalk, follow, or monitor another person</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. User Content</h2>
          <p className="text-wave-muted">
            You are responsible for the content you share through Wave, including your note (visible to nearby users), social media handles, and any reports or support tickets you submit. You agree not to share offensive, harmful, or inappropriate content. We reserve the right to remove content and suspend accounts that violate these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Matching and Social Handle Exchange</h2>
          <p className="text-wave-muted">
            When two users mutually wave at each other, a &quot;match&quot; is created. Upon matching, both users&apos; Instagram and/or Snapchat handles (if provided) are shared with each other. By providing your social media handles, you consent to their disclosure to your mutual matches. You can remove a match at any time, and you can block a user to prevent future interactions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Safety and Reporting</h2>
          <p className="text-wave-muted">
            Wave provides tools to block and report users. If you experience harassment or inappropriate behavior, we encourage you to use the in-app reporting feature. We review all reports and may take action including account suspension or termination. However, Wave is not responsible for the behavior of its users, and interactions that continue outside the App (e.g., on Instagram or Snapchat) are beyond our control.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Bluetooth and Device Permissions</h2>
          <p className="text-wave-muted">
            Wave requires Bluetooth Low Energy (BLE) permission to function. The App broadcasts an ephemeral token via BLE to enable nearby user discovery. By using Wave, you consent to this Bluetooth activity. You can disable BLE broadcasting at any time by stopping discovery or closing the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. Account Termination</h2>
          <p className="text-wave-muted">
            You may delete your account at any time from the Settings screen in the App. Account deletion is permanent and removes all your data from our servers, including your profile, matches, and social handles. We may also terminate or suspend your account if you violate these Terms, without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Disclaimer of Warranties</h2>
          <p className="text-wave-muted">
            Wave is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components. We do not guarantee the accuracy or completeness of any information provided through the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">11. Limitation of Liability</h2>
          <p className="text-wave-muted">
            To the fullest extent permitted by applicable law, Wave and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or personal injury, arising from your use of the App or any interactions with other users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law</h2>
          <p className="text-wave-muted">
            These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Germany, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of Berlin, Germany.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">13. Contact</h2>
          <p className="text-wave-muted">
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@wave-app.com" className="text-wave-primary hover:underline">
              support@wave-app.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
