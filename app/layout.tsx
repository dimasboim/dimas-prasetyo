import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dimas-prasetyo.com'),
  title: {
    default: 'Dimas Prasetyo Tegar Asmoro | Chief Technology Officer',
    template: '%s | Dimas Prasetyo',
  },
  description: 'Technology executive with two decades in software engineering, currently CTO of PadiUMKM (PT Telkom Indonesia). Track record across telco/MSME, healthtech, agritech, and venture-backed marketplaces.',
  keywords: ['Dimas Prasetyo', 'CTO', 'Chief Technology Officer', 'VP Engineering', 'Technology Leader', 'PadiUMKM', 'Telkom Indonesia', 'Jakarta', 'Indonesia', 'Technology Executive'],
  authors: [{ name: 'Dimas Prasetyo Tegar Asmoro' }],
  creator: 'Dimas Prasetyo Tegar Asmoro',
  publisher: 'Dimas Prasetyo Tegar Asmoro',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.dimas-prasetyo.com',
    title: 'Dimas Prasetyo Tegar Asmoro | Chief Technology Officer',
    description: 'Technology executive with two decades in software engineering, currently CTO of PadiUMKM (PT Telkom Indonesia).',
    siteName: 'Dimas Prasetyo',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dimas Prasetyo Tegar Asmoro - Technology Leadership Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dimasprasetyo',
    creator: '@dimasprasetyo',
    title: 'Dimas Prasetyo Tegar Asmoro | Chief Technology Officer',
    description: 'Technology executive with two decades in software engineering, currently CTO of PadiUMKM (PT Telkom Indonesia).',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <footer className="site-footer">
          <div className="footer-inner site-shell">
            <div className="footer-brand">
              <strong>Dimas Prasetyo Tegar Asmoro</strong>
              <span>Chief Technology Officer</span>
            </div>
            <nav className="footer-links">
              <a href="#signature">Leadership</a>
              <a href="#experience">Experience</a>
              <a href="/cv">CV</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="footer-social">
              <a href="https://instagram.com/dimasboim" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/in/dimasprasetyotegar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="footer-meta">© {new Date().getFullYear()} Dimas Prasetyo</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
