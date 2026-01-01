import React from "react";
import Link from "next/link";

const HOME = () => {
  return (
    <div className="min-h-screen bg-linear-to-tr from-black via-indigo-900 to-purple-800 text-white flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome
        </h1>

        <p className="text-gray-200 mb-8">
          This project is my learning playground where I’m exploring
          <span className="font-semibold text-indigo-300"> React, Next.js, Tailwind CSS, and state management</span>.
          Each page below focuses on one concept.
        </p>

        {/* Pages Section */}
        <div className="grid gap-4">
          
          {/* Login */}
          <Link href="/Login">
            <div className="p-4 rounded-xl bg-indigo-600/80 hover:bg-indigo-700 transition cursor-pointer">
              <h2 className="text-xl font-semibold">🔐 Login Page</h2>
              <p className="text-sm text-indigo-100">
                Controlled inputs, useState, event handling, client components,
                routing to register page.
              </p>
            </div>
          </Link>

          {/* Register */}
          <Link href="/Register">
            <div className="p-4 rounded-xl bg-purple-600/80 hover:bg-purple-700 transition cursor-pointer">
              <h2 className="text-xl font-semibold">📝 Register Page</h2>
              <p className="text-sm text-purple-100">
                Form layout, Tailwind styling, and basic input handling.
              </p>
            </div>
          </Link>

          {/* Counter */}
          <Link href="/Counter">
            <div className="p-4 rounded-xl bg-pink-600/80 hover:bg-pink-700 transition cursor-pointer">
              <h2 className="text-xl font-semibold">🔢 Counter</h2>
              <p className="text-sm text-pink-100">
                Understanding useState by counting button clicks.
              </p>
            </div>
          </Link>
        </div>

        {/* Footer Notes */}
        <div className="mt-8 text-sm text-gray-300 border-t border-white/20 pt-4">
          <p>
            ✨ Built step-by-step while learning:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>React components & JSX</li>
            <li>Client vs Server components in Next.js</li>
            <li>Tailwind utility-first styling</li>
            <li>Basic routing & navigation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HOME;
