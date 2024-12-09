import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'White Glove Ventures',
  description: 'Boutique accelerator for startups and VCs',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
