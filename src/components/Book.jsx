import React, { useState } from "react";

export const Book = () => {
  const [value, setValue] = useState({
    name: "",
    mobile: Number,
    branches: "",
    reason: "",
  });

  const branchName = [
    "IT Park Branch",
    "Colon Branch",
    "Mandaue Branch",
    "Talisay Branch (Pre-registration)",
  ];

  const handleSubmit = () => {
    setValue();
    // console.log(value);
  };

  // console.log(branchName)
  return (
    <section
      id="book"
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* <!-- Section Header --> */}
        <span className="inline-block bg-blue-500/20 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
          Ready to Visit?
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Book Your Appointment
        </h2>

        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-12">
          Same-day appointments are often available. Choose your preferred
          branch and we'll contact you shortly.
        </p>

        {/* <!-- Form Card --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 max-w-3xl mx-auto text-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* <!-- Name + Phone --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  value={value.name}
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                  type="text"
                  placeholder="Juan Dela Cruz"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  value={value.mobile}
                  onChange={(e) =>
                    setValue({ ...value, mobile: e.target.value })
                  }
                  type="tel"
                  placeholder="09XX XXX XXXX"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* <!-- Branch --> */}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Branch
              </label>

              <select
                value={value.branches}
                onChange={(e) => setValue({...value, branches: e.target.value})}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                {branchName.map((branch) => (
                  <option key={branch}>{branch}</option>
                ))}
              </select>
            </div>

            {/* <!-- Reason --> */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Reason for Visit
              </label>

              <textarea
                value={value.reason}
                onChange={(e) => setValue({...value,reason: e.target.value})}
                rows="4"
                placeholder="e.g. General check-up, laboratory test, consultation..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              ></textarea>
            </div>

            {/* <!-- Additional Info --> */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800">
              📅 Our staff will contact you to confirm your preferred schedule.
            </div>

            {/* <!-- Button --> */}
            <button
              // onSubmit={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
