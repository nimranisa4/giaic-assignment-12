"use client";

export default function SignInPage() {
  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Welcome! Please Sign In</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={() => alert("Signing In...")}
      >
        Sign In
      </button>
    </div>
  );
}
