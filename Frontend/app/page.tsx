export default function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 dark:text-gray-100">Assessment Instructions</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-900/50">
        <h2 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200">Introduction</h2>
        <p className="mb-4 text-blue-800 dark:text-blue-200">Thanks for applying to Finity.</p>
        <p className="mb-4 text-blue-800 dark:text-blue-200">
          This assessment is designed to show us how you approach real-world engineering problems using the same core stack we work with day to day:
        </p>
        <ul className="list-disc pl-6 mb-4 text-blue-800 space-y-1 dark:text-blue-200">
          <li><strong>Backend:</strong> .NET Core (C#)</li>
          <li><strong>Frontend:</strong> React (we primarily use Next.js)</li>
          <li><strong>Database Layer:</strong> Entity Framework</li>
        </ul>
        <p className="mb-4 text-blue-800 dark:text-blue-200">
          The boilerplate project we provide is already set up with this stack, so you can focus your time on the implementation rather than scaffolding a new project.
        </p>
        <p className="text-blue-800 font-medium dark:text-blue-200">
          The whole exercise should take no more than 3-4 hours.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">The Challenge</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          This is a single project with both backend and frontend elements. The goal is to build a simple system where user preferences can be updated and those changes are properly captured in an audit log.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Backend (.NET Core with Entity Framework): Auditing</h3>
          <p className="mb-3 text-gray-700 dark:text-gray-300">Extend the provided .NET Core boilerplate so that changes to data are automatically audited.</p>
          <p className="mb-2 text-gray-700 font-medium dark:text-gray-300">Requirements:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 dark:text-gray-300">
            <li>Every <code className="bg-gray-100 px-1 rounded dark:bg-gray-700">Add</code>, <code className="bg-gray-100 px-1 rounded dark:bg-gray-700">Update</code>, or <code className="bg-gray-100 px-1 rounded dark:bg-gray-700">Delete</code> should be logged to an <code className="bg-gray-100 px-1 rounded dark:bg-gray-700">AuditEntries</code> table.</li>
            <li>Each log entry should include at least:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Entity type & ID</li>
                <li>Operation (Create/Update/Delete)</li>
                <li>Timestamp</li>
                <li>Changed values (before/after where relevant)</li>
              </ul>
            </li>
            <li>The auditing mechanism should work across different entity types.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Frontend (React / Next.js): Preferences</h3>
          <p className="mb-3 text-gray-700 dark:text-gray-300">Extend the provided React/Next.js boilerplate with a UI for managing user preferences.</p>
          <p className="mb-2 text-gray-700 font-medium dark:text-gray-300">Implement the following settings exactly:</p>
          <ul className="mb-3 list-disc pl-6 text-gray-700 space-y-1 dark:text-gray-300">
            <li>Items per page: Dropdown with options (10, 20, 50, 100)</li>
            <li>Theme: Dropdown with options (Light, Dark)</li>
          </ul>
          
          <p className="mb-2 text-gray-700 font-medium dark:text-gray-300">Requirements:</p>
          <ul className="mb-3 list-disc pl-6 text-gray-700 space-y-1 dark:text-gray-300">
            <li>Preferences should be stored in the database via the backend and Entity Framework.</li>
            <li>On page load, the app should fetch and display the currently stored values for each preference (not just defaults).</li>
            <li>Updates to preferences should also be captured by your auditing system.</li>
          </ul>

          <p className="mb-2 text-gray-700 font-medium dark:text-gray-300">Note:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 dark:text-gray-300">
            <li>The styling for both light and dark mode is already in place, the requirement is to wire it up to the user&apos;s preference.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Frontend (React / Next.js): Audit Logs</h3>
          <p className="mb-3 text-gray-700 dark:text-gray-300">Extend the provided React/Next.js boilerplate with a UI for viewing audit log entries.</p>
          <p className="mb-2 text-gray-700 font-medium dark:text-gray-300">Requirements:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 dark:text-gray-300">
            <li>Show audit entries in a table with pagination.</li>
            <li>The pagination should respect the current user's Items Per Page preference.</li>
            <li>Display for each log entry, Entity type, Entity ID, Operation, Timestamp, Changed values.</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-8 border border-green-200 dark:bg-green-900/20 dark:border-green-900/30">
        <h2 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-200">What We'll Look At</h2>
        <ul className="list-disc pl-6 text-green-800 space-y-2 dark:text-green-200">
          <li>Code that is clean, maintainable, and reflects senior-level standards.</li>
          <li>A practical, working full-stack solution that ties backend and frontend together.</li>
          <li>Awareness of trade-offs and alternatives.</li>
          <li>Evidence you can test effectively (we don't expect exhaustive suites, but we do expect to see how you'd approach testing).</li>
          <li>How you structure and reason about the project overall.</li>
        </ul>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg mb-8 border border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-900/30">
        <h2 className="text-xl font-semibold mb-4 text-yellow-900 dark:text-yellow-200">What's Out of Scope</h2>
        <p className="mb-3 text-yellow-800 dark:text-yellow-200">You don't need to:</p>
        <ul className="list-disc pl-6 text-yellow-800 space-y-1 dark:text-yellow-200">
          <li>Implement authentication/authorization.</li>
          <li>Deploy the app or set up CI/CD.</li>
          <li>Write complete test coverage for every component/class (focus on representative examples).</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-200 dark:bg-purple-900/20 dark:border-purple-900/30">
        <h2 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-200">How to Submit</h2>
        <ul className="list-disc pl-6 text-purple-800 space-y-2 dark:text-purple-200">
          <li>Use the provided boilerplate project as your starting point.</li>
          <li>Share your finished code in a GitHub repo or as a zip file.</li>
          <li>Include a short README with:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Setup instructions.</li>
              <li>Notes on your design choices (why you did it that way, what else you considered, what you'd improve with more time).</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg mb-8 border border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-900/30">
        <h2 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200">What Happens Next</h2>
        <p className="mb-4 text-indigo-800 dark:text-indigo-200">
          Once you've submitted your work, we'll review it. If it hits the standard we're looking for, we'll invite you to a follow-up interview where we'll go through your solution together.
        </p>
        <p className="mb-4 text-indigo-800 dark:text-indigo-200">
          That interview is where we'll dig into your reasoning, the trade-offs you made, and how you'd extend or refine the solution.
        </p>
        <p className="text-indigo-800 font-medium dark:text-indigo-200">
          The focus here is on how you approach a problem like a senior engineer: pulling the pieces together, making sensible decisions, and building something maintainable.
        </p>
      </div>
    </div>
  );
}
