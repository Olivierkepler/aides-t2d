export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">About the AIDES-T2D Study Portal</h1>
        <p className="text-lg text-slate-700 mb-6">
          Welcome to the online portal for participants, staff, and administrators of the <span className="font-semibold">AIDES-T2D</span> study. Our mission is to provide helpful digital tools to make your study experience simple, secure, and valuable.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Why this Portal?</h2>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li>Track your study progress and activities in one place</li>
            <li>Receive reminders, tips, and helpful content related to your participation</li>
            <li>Ensure information is safe and accessible to only authorized users</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Who can use it?</h2>
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li><span className="font-semibold">Participants:</span> Log in to check in each day, view your history, access resources, and track your progress.</li>
            <li><span className="font-semibold">Study Team:</span> Manage study participants, check enrollment status, track metrics, and generate reports.</li>
            <li><span className="font-semibold">Administrators:</span> Oversee all aspects of the digital study platform.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Data Privacy</h2>
          <p className="text-slate-700">
            Your privacy and security are our top priorities. The information you enter is encrypted and only accessible to study staff as required by protocol. If you have any concerns, please contact the study team.
          </p>
        </div>
        <p className="text-slate-500 mt-10 text-center text-sm">
          &copy; {new Date().getFullYear()} EchoPilot Inc. — AIDES-T2D Study Portal
        </p>
      </div>
    </div>
  );
}
