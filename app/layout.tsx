import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dimas Prasetyo',
  description: 'Senior technology leader from Jakarta. CTO, product strategy, and enterprise transformation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
