import React, { useState } from "react";
import { Button } from "../../shared/ui/Button";

export const Booking = () => {
  const [loading, setLoading] = useState(false);
  const initialState = {
    name: "",
    mobile: "",
    branches: "",
    reason: "",
  };

  const [value, setValue] = useState(initialState);

  const branchName = [
    "IT Park Branch",
    "Colon Branch",
    "Mandaue Branch",
    "Talisay Branch (Pre-registration)",
  ];

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    // Simulate an async submit to backend
    setLoading(true);
    console.log("Submitting form:", value);
    // Replace this with real API call
    setTimeout(() => {
      // On success
      setValue(initialState);
      setLoading(false);
      console.log("Form submitted");
    }, 800);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="  space-y-4"
      >
        {/* <!-- Name + Phone --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 ">
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
              onChange={(e) => setValue({ ...value, mobile: e.target.value })}
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
            onChange={(e) => setValue({ ...value, branches: e.target.value })}
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
            onChange={(e) => setValue({ ...value, reason: e.target.value })}
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
       
        <Button
          loading={loading}
          disabled={loading || String(value.name || '').trim() === ''}
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          label={loading ? '' : 'Request Appointment'}
        />
        
      </form>
    </>
  );
};
