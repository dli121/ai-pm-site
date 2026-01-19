// app/demo/page.tsx
import Link from "next/link";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">AI Demo</h1>
          <Link className="text-sm underline text-neutral-700 hover:text-neutral-900" href="/">
            Back
          </Link>
        </div>

        <div className="mt-6 rounded-2xl border border-neutral-200 p-6 text-sm text-neutral-700">
          Coming soon: <span className="font-medium">Decision Risk Analyzer</span> — a small tool that helps PMs
          identify risks, missing assumptions, and validation steps for AI-related decisions.
        </div>
      </div>
    </main>
  );
}
