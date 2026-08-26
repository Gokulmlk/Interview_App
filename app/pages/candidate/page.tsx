import Link from "next/link";

export default function CandidatePage() {
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
          Candidate Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Manage your interviews and improve your skills.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#1f2937] border border-gray-700 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3">
              Start Interview
            </h2>

            <p className="text-gray-400 mb-5">
              Start a new AI-powered mock interview.
            </p>

            <button className="bg-blue-600 px-4 py-2 rounded-lg">
              Start Now
            </button>
          </div>

          <div className="bg-[#1f2937] border border-gray-700 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3">
              Interview History
            </h2>

            <p className="text-gray-400">
              View your previous interview results.
            </p>
          </div>

          <div className="bg-[#1f2937] border border-gray-700 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-3">
              Performance
            </h2>

            <p className="text-gray-400">
              Track your interview performance and progress.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}