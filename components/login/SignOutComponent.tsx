"use client";

export default function SignOutPage() {
  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-red-500">Goodbye! You are Signed Out</h1>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        onClick={() => alert("Signing Out...")}
      >
        Sign Out
      </button>
    </div>
  );
}
