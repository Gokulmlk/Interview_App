"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("candidate");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Later you can connect this with your backend/database
    const userData = {
      name,
      email,
      password,
      role,
    };

    console.log(userData);

    if (role === "candidate") {
      router.push("/candidate");
    } else {
      router.push("/interviewer");
    }
  };

  return (
    <main className="min-h-screen bg-[#111827] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-[#1f2937] rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Register to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-3">
              Select Role
            </label>

            <div className="grid grid-cols-2 gap-4">

              <button
                type="button"
                onClick={() => setRole("candidate")}
                className={`p-4 rounded-lg border transition ${
                  role === "candidate"
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-gray-600"
                }`}
              >
                <div className="text-white font-semibold">
                  Candidate
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Take interviews
                </p>
              </button>

              <button
                type="button"
                onClick={() => setRole("interviewer")}
                className={`p-4 rounded-lg border transition ${
                  role === "interviewer"
                    ? "border-purple-500 bg-purple-500/20"
                    : "border-gray-600"
                }`}
              >
                <div className="text-white font-semibold">
                  Interviewer
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Conduct interviews
                </p>
              </button>

            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Register
          </button>

        </form>

      </div>
    </main>
  );
}