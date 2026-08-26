import Link from "next/link";

export default function RoleCards() {
  return (
    <div className="mt-14 grid max-w-2xl gap-4 sm:grid-cols-2">

      <Link
        href="/pages/candidate"
        className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition hover:-translate-y-1"
      >
        <h3 className="text-lg font-semibold">
          Candidate
        </h3>

        <p className="mt-2 text-sm text-gray-300">
          Practice interviews and improve your confidence.
        </p>
      </Link>

      <Link
        href="/pages/interviewer"
        className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition hover:-translate-y-1"
      >
        <h3 className="text-lg font-semibold">
          Interviewer
        </h3>

        <p className="mt-2 text-sm text-gray-300">
          Conduct structured and effective interviews.
        </p>
      </Link>

    </div>
  );
}