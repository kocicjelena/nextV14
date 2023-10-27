import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    template: '%s | follow',
    default: 'Dashboard',
  },
  description: 'nextjs 14',
  metadataBase: new URL('https://next-v14-kocicjelena.vercel.app'),
};


export default function RootLayout({

  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
