'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">Finity Assessment</span>
              <img src="/images/logo.png" alt="" className="h-16 w-auto dark:hidden" />
              <img src="/images/logo-dark.png" alt="" className="h-16 w-auto hidden dark:block" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
              }`}
            >
              Instructions
            </Link>
            
            <Link
              href="/preferences"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/preferences') 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
              }`}
            >
              Preferences
            </Link>

            <Link
              href="/audits"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/audits') 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
              }`}
            >
              Audits
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
