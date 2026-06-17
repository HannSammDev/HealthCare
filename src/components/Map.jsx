import React, { useState } from "react";

const API_KEY = "AIzaSyAZ9iUgH4GsrunSBl4xo2FZg_zazccUAzY";

const branches = [
  {
    name: "Cebu IT Park",
    area: "Lahug, Cebu City",
    q: "Cebu+IT+Park,Lahug,Cebu+City",
    directionsUrl: "https://maps.google.com/?q=Cebu+IT+Park,Lahug,Cebu+City",
  },
  {
    name: "Ayala Center Cebu",
    area: "Cebu Business Park",
    q: "Ayala+Center+Cebu,Cebu+Business+Park",
    directionsUrl:
      "https://maps.google.com/?q=Ayala+Center+Cebu,Cebu+Business+Park",
  },
  {
    name: "SM City Cebu",
    area: "North Reclamation Area",
    q: "SM+City+Cebu,North+Reclamation+Area",
    directionsUrl:
      "https://maps.google.com/?q=SM+City+Cebu,North+Reclamation+Area",
  },
  {
    name: "Mandaue Branch",
    area: "A.S. Fortuna St.",
    q: "AS+Fortuna+Street,Mandaue+City,Cebu",
    directionsUrl:
      "https://maps.google.com/?q=AS+Fortuna+Street,Mandaue+City,Cebu",
  },
  {
    name: "Mactan Branch",
    area: "Lapu-Lapu City",
    q: "Lapu-Lapu+City,Cebu",
    directionsUrl: "https://maps.google.com/?q=Lapu-Lapu+City,Cebu",
  },
];

export const Map = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = branches[activeIndex];

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

            {branches.map((branch, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-colors text-left w-full border-0 ${
                  activeIndex === i
                    ? "bg-blue-50 ring-1 ring-blue-200"
                    : "hover:bg-blue-50"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                    activeIndex === i
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      activeIndex === i ? "text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {branch.name}
                  </p>
                  <p className="text-xs text-gray-400">{branch.area}</p>
                </div>
              </button>
            ))}

            <a
              href={active.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-center text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors py-2.5 rounded-xl"
            >
              Get Directions →
            </a>
          </div>

          {/* Map */}
          <div className="flex-1 min-h-[350px] lg:min-h-[480px]">
            <iframe
              key={activeIndex}
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${active.q}`}
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
