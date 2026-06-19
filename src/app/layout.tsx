import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MB Simphony',
  description: 'Website marching band modern dengan profil, section, dan pendaftaran.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}