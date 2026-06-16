import React from "react";

export const Book = () => {
  return (
    <section id="book" className="py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900">
    <div className="max-w-4xl mx-auto text-center">
  
      {/* <!-- Section Header --> */}
      <span
        className="inline-block bg-blue-500/20 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
        Ready to Visit?
      </span>
  
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Book Your Appointment
      </h2>
  
      <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-12">
        Same-day appointments are often available. Choose your preferred branch and we'll contact you shortly.
      </p>
  
      {/* <!-- Form Card --> */}
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 max-w-3xl mx-auto text-left">
  
        <div className="space-y-6">
  
          {/* <!-- Name + Phone --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input type="text" placeholder="Juan Dela Cruz"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
            </div>
  
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input type="tel" placeholder="09XX XXX XXXX"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
            </div>
  
          </div>
  
          {/* <!-- Branch --> */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Branch
            </label>
  
            <select
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
              <option>IT Park Branch</option>
              <option>Colon Branch</option>
              <option>Mandaue Branch</option>
              <option>Talisay Branch (Pre-registration)</option>
            </select>
          </div>
  
          {/* <!-- Reason --> */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Reason for Visit
            </label>
  
            <textarea rows="4" placeholder="e.g. General check-up, laboratory test, consultation..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"></textarea>
          </div>
  
          {/* <!-- Additional Info --> */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800">
            📅 Our staff will contact you to confirm your preferred schedule.
          </div>
  
          {/* <!-- Button --> */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            Request Appointment
          </button>
  
        </div>
      </div>
    </div>
  </section>

  )
}