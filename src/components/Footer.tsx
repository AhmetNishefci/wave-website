import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-wave-surface bg-wave-bg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <img src="/wave-hand.png" alt="Wave" width={36} height={36} className="w-9 h-9" />
              <span className="text-xl font-bold text-white group-hover:text-wave-primary transition-colors">Wave</span>
            </Link>
            <p className="text-sm text-wave-muted leading-relaxed">
              Discover people nearby. No profiles, no swiping. Just real-world connections.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <div className="flex flex-col gap-3">
              <Link href="/#how-it-works" className="text-sm text-wave-muted hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="/#features" className="text-sm text-wave-muted hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/#privacy" className="text-sm text-wave-muted hover:text-white transition-colors">
                Safety
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-wave-muted hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-wave-muted hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:support@wavenearby.com"
                className="text-sm text-wave-muted hover:text-white transition-colors"
              >
                support@wavenearby.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-wave-surface flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-wave-muted">
            &copy; {year} Wave. All rights reserved.
          </p>
          <p className="text-xs text-wave-muted">
            Made with 👋 for real-world connections
          </p>
        </div>
      </div>
    </footer>
  );
}
