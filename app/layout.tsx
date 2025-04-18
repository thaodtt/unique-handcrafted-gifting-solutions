import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/core/Header'; // We'll create this next
import { ThemeProvider } from '@/components/ui/theme-provider'; // Optional: For dark mode

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Unique Handcrafted Gifting Solutions', // Set website title
  description: 'Handcrafted artworks including paintings, trays, and coasters.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Optional: Add ThemeProvider for dark/light mode toggle if desired */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header /> {/* Add the site header/navigation */}
          <main className="container mx-auto px-4 py-8">{children}</main> {/* Main content area */}
          {/* You can add a Footer component here later */}
        </ThemeProvider>
      </body>
    </html>
  );
}
