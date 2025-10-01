export default function PreferencesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2 dark:text-gray-100">Preferences</h1>
      <p className="text-gray-600 mb-8 dark:text-gray-300">
        Manage your application preferences and settings.
      </p>

      <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 text-center max-w-2xl dark:bg-blue-900/30 dark:border-blue-900/50">
        <h3 className="mt-0 mb-3 text-blue-800 font-semibold text-lg dark:text-blue-200">
          Implementation Required
        </h3>
        <p className="text-blue-800 mb-5 text-base dark:text-blue-200">
          This page is part of your assessment. Please implement the preferences interface as described in the requirements.
        </p>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 max-w-2xl dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <label htmlFor="itemsPerPage" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300 sm:mb-0">
              Items per page
            </label>
            <div className="w-full sm:w-auto flex sm:justify-end">
              <div className="relative w-full sm:w-64 inline-block">
                <select
                  id="itemsPerPage"
                  name="itemsPerPage"
                  className="block appearance-none rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 h-10 px-3 pr-12 text-sm sm:text-base w-full"
                >
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none absolute inset-y-0 right-3 my-auto h-5 w-5 text-gray-400 dark:text-gray-400">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300 sm:mb-0">
              Theme
            </label>
            <div className="w-full sm:w-auto flex sm:justify-end">
              <div className="relative w-full sm:w-64 inline-block">
                <select
                  id="theme"
                  name="theme"
                  className="block appearance-none rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 h-10 px-3 pr-12 text-sm sm:text-base w-full"
                >
                  <option>System</option>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none absolute inset-y-0 right-3 my-auto h-5 w-5 text-gray-400 dark:text-gray-400">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
