import Link from "next/link";

export default function InterviewerPage() {
  return (
    <main className="min-h-screen bg-[#111827] text-white">

      <nav className="border-b border-gray-700 px-8 py-5 flex justify-between">
        <h1 className="text-xl font-bold">
          Interview Platform
        </h1>

        <Link
          href="/"
          className="text-gray-400 hover:text-white"
        >
          Logout
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-2">
          Interviewer Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Manage candidates and conduct interviews.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#1f2937] border border-gray-700 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3">
              Create Interview
            </h2>

            <p className="text-gray-400 mb-5">
              Create and schedule a new interview.
            </p>

            <button className="bg-purple-600 px-4 py-2 rounded-lg">
              Create Interview
            </button>
          </div>

          <div className="bg-[#1f2937] border border-gray-700 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3">
              Candidates
            </h2>

            <p className="text-gray-400">
              View and manage candidate profiles.
            </p>
          </div>

          <div className="bg-[#1f2937] border border-gray-700 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3">
              Interview History
            </h2>

            <p className="text-gray-400">
              Review completed interviews and feedback.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}