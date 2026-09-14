import React from "react";

function App() {
  const handleClick = () => {
    alert("Correct! onClick is the valid JSX event handler.");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 px-6 py-12 text-gray-900">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          JSX Keyword Replacement Challenge
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          All JSX attributes below now follow React conventions:
          <code className="mx-1 rounded bg-gray-200 px-1 py-0.5 font-mono text-sm">
            className
          </code>
          ,
          <code className="mx-1 rounded bg-gray-200 px-1 py-0.5 font-mono text-sm">
            htmlFor
          </code>
          , and
          <code className="mx-1 rounded bg-gray-200 px-1 py-0.5 font-mono text-sm">
            onClick
          </code>
          .
        </p>
      </div>

      <form className="w-full max-w-md space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Click me
        </button>
      </form>

      <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        <AttributeCard keyword="class" replacement="className" />
        <AttributeCard keyword="for" replacement="htmlFor" />
        <AttributeCard keyword="onclick" replacement="onClick" />
      </div>
    </main>
  );
}

function AttributeCard({ keyword, replacement }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
      <p className="text-sm text-gray-500">Replaced keyword</p>
      <div className="mt-2 flex items-center justify-center gap-2 text-lg font-semibold text-gray-900">
        <span className="text-red-500 line-through">{keyword}</span>
        <span className="text-gray-400">→</span>
        <span className="text-blue-600">{replacement}</span>
      </div>
    </div>
  );
}

export default App;
