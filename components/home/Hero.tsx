import Link from "next/link";
import RoleCards from "./RoleCards";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-16 pt-10 lg:px-8">
      <div className="max-w-4xl">

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-300" />
          Smarter interviews. Better preparation.
        </div>

        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
          Master Your Next{" "}
          <span className="text-blue-300">
            Interview.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
          Prepare for interviews with confidence and connect candidates
          with interviewers through one modern platform.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/pages/signup"
            className="rounded-xl bg-white px-7 py-4 text-center font-semibold text-[#0A29FF]"
          >
            Get Started
          </Link>
        </div>

        <RoleCards />

      </div>
    </section>
  );
}