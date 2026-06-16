import React from "react";

export const Location = () => {
  return (
    <section id="locations" className="py-20 px-4 sm:px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Our locations</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Find a clinic near you</h2>
        <p className="text-gray-500 text-base max-w-xl">All branches are staffed by licensed physicians and open Monday to
          Saturday.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* <!-- Branch card --> */}
        <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-900 text-base">IT Park Branch</h3>
            <span
              className="inline-flex items-center gap-1 bg-teal-50 text-teal-800 text-xs font-semibold px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block"></span> Open
            </span>
          </div>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>G/F Cybergate Tower, Lahug, Cebu City</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>Mon–Sat, 8:00 AM – 6:00 PM</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>(032) 234-5678</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m2 4h1a2 2 0 012 2v4a2 2 0 01-2 2h-1m-6-8h8" />
              </svg>Free parking available</li>
          </ul>
          <a href="#book"
            className="mt-auto text-center text-sm font-semibold text-blue-600 border border-blue-200 rounded-lg py-2 hover:bg-blue-50 transition-colors">Get
            directions</a>
        </div>

        <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-900 text-base">Colon Branch</h3>
            <span
              className="inline-flex items-center gap-1 bg-teal-50 text-teal-800 text-xs font-semibold px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block"></span> Open
            </span>
          </div>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>2/F Colon St. Bldg., Downtown Cebu</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>Mon–Sat, 8:00 AM – 5:00 PM</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>(032) 234-9101</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>Near Jeepney terminal</li>
          </ul>
          <a href="#book"
            className="mt-auto text-center text-sm font-semibold text-blue-600 border border-blue-200 rounded-lg py-2 hover:bg-blue-50 transition-colors">Get
            directions</a>
        </div>

        <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-900 text-base">Mandaue Branch</h3>
            <span
              className="inline-flex items-center gap-1 bg-teal-50 text-teal-800 text-xs font-semibold px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block"></span> Open
            </span>
          </div>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>National Highway, Mandaue City</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>Mon–Sat, 9:00 AM – 6:00 PM</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>(032) 345-1122</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m2 4h1a2 2 0 012 2v4a2 2 0 01-2 2h-1m-6-8h8" />
              </svg>Spacious parking lot</li>
          </ul>
          <a href="#book"
            className="mt-auto text-center text-sm font-semibold text-blue-600 border border-blue-200 rounded-lg py-2 hover:bg-blue-50 transition-colors">Get
            directions</a>
        </div>

        <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-900 text-base">Talisay Branch</h3>
            <span
              className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block"></span> Soon
            </span>
          </div>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>Tabunok, Talisay City, Cebu</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>Mon–Sat, 8:00 AM – 5:00 PM</li>
            <li className="flex gap-2"><svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>(032) 345-3344</li>
            <li className="flex gap-2 text-blue-600 font-medium"><svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>Pre-registration now open</li>
          </ul>
          <a href="#book"
            className="mt-auto text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 transition-colors">Pre-register
            now</a>
        </div>

      </div>
    </div>
  </section>
  )
}