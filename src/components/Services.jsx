import React from "react";

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
            What we offer
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Services at all branches
          </h2>
          <p className="text-gray-500 text-base max-w-xl">
            From routine check-ups to specialist consultations — all under one
            roof.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4 hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                General consultation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Walk-in and appointment-based visits with licensed family
                physicians.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4 hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                Vaccines & immunization
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Complete vaccine packages for children and adults, including
                travel vaccines.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4 hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                Diagnostics & lab
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                On-site blood work, urinalysis, ECG, and rapid tests with
                same-day results.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4 hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-teal-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                Chronic disease care
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Diabetes, hypertension, asthma, and cardiovascular management
                programs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4 hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-teal-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 21h10M12 3v18M3 9h18" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                Medical certificates
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Pre-employment, school, and OFW medical clearances processed
                within the day.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4 hover:shadow-sm transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-teal-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                Teleconsult
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Video consultations from home — available Mon–Fri, 9 AM to 4 PM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}