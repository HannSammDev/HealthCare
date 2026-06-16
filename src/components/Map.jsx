import React from "react";

export const Map = () => {
  return (
    <section className="bg-blue-50 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-blue-100 border border-blue-200 h-64 flex flex-col items-center justify-center gap-3 text-blue-600">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          <p className="font-semibold text-sm">
            Interactive map — 5 clinic locations across Cebu
          </p>
          <p className="text-xs text-blue-500">Google Maps embed goes here</p>
        </div>
      </div>
    </section>
  );
}