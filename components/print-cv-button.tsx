"use client";

export default function PrintCvButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print rounded border border-black px-4 py-2 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
      type="button"
    >
      Download CV
    </button>
  );
}
