import React from "react";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            {/* <!-- geo badge --> */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Now serving Cebu City & nearby areas
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-4">
              Quality healthcare,
              <br />
              <span className="text-blue-600">close to home.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              HealthFirst Clinic brings licensed physicians, same-day
              diagnostics, and affordable care to five locations across Cebu —
              no long wait times, no complicated referrals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#book"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm text-center"
              >
                Book an appointment
              </a>
              <a
                href="#locations"
                className="border border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors text-sm text-center"
              >
                Find a clinic near you
              </a>
            </div>
          </div>
          {/* <!-- Stats panel --> */}
          <div className="flex-shrink-0 w-full max-w-sm">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-700 font-display">
                  5
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Clinic branches
                </div>
              </div>
              <div className="bg-teal-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-teal-600 font-display">
                  20+
                </div>
                <div className="text-xs text-gray-500 mt-1">Years in Cebu</div>
              </div>
              <div className="bg-teal-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-teal-600 font-display">
                  50k+
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Patients served
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-700 font-display">
                  4.9★
                </div>
                <div className="text-xs text-gray-500 mt-1">Patient rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
