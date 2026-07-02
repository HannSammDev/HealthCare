import React, { useState } from "react";
import { Booking } from "./Booking";

export const Book = () => {
 

  return (
    <section
      id="book"
      className="py-10 px-4 sm:px-6 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900"
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
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 max-w-lg mx-auto text-left">
        <Booking/>
        </div>
      </div>
    </section>
  );
};
