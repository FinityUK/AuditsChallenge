import { Providers } from '@/lib/providers';
import { Navigation } from '@/components/navigation';
import './globals.css';

export const metadata = {
  title: 'Finity Assessment',
  description: 'Senior Engineer Technical Assessment',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="h-full bg-gray-50 dark:bg-gray-900">
        <Providers>
          <div className="min-h-full">
            <Navigation />
            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
