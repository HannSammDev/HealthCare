import React from "react";

export const Map = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
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
            5 Locations across Cebu
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Find a Clinic Near You
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Walk-ins welcome · Mon–Sat, 8AM–6PM
          </p>
        </div>

        {/* Map + Info Card */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-100 flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="bg-white lg:w-64 shrink-0 p-5 flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-blue-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Our Branches
            </p>

            {[
              { name: "Cebu IT Park", area: "Lahug, Cebu City" },
              { name: "Ayala Center Cebu", area: "Cebu Business Park" },
              { name: "SM City Cebu", area: "North Reclamation Area" },
              { name: "Mandaue Branch", area: "A.S. Fortuna St." },
              { name: "Mactan Branch", area: "Lapu-Lapu City" },
            ].map((clinic, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    {clinic.name}
                  </p>
                  <p className="text-xs text-gray-400">{clinic.area}</p>
                </div>
              </div>
            ))}

            {/* ✅ Fixed: was missing the opening <a */}
            <a
              href="#"
              className="mt-auto text-center text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors py-2.5 rounded-xl"
            >
              Get Directions →
            </a>
          </div>

          {/* Map */}
          <div className="flex-1 min-h-[350px] lg:min-h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.1500133923596!2d123.90555827354548!3d10.329877367274682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99921dc1502cd%3A0x14da459df63f6995!2sCebu%20IT%20Park!5e0!3m2!1sen!2sph!4v1781578727006!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "350px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
