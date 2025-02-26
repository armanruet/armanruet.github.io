import '@fontsource/mukta';
import './tailwind.css';

import Analytics from 'app/components/analytics/analytics';
import Footer from 'app/components/layouts/footer';
import Header from 'app/components/layouts/header';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: '%s | Arman Hossen',
    default: 'Arman Hossen',
  },
  description: 'I transform complex problems into elegant solutions',
  metadataBase: new URL('https://armanruet.github.io'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/static/favicons/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className="min-h-screen bg-white text-black antialiased dark:bg-black dark:text-white text-[1rem] text-base md:text-lg"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={['dark', 'light']}
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
