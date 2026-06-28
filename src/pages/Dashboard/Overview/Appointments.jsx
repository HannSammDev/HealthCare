import React from "react";

const appointments = [
  {
    initials: "MR",
    color: "bg-blue-100 text-blue-600",
    name: "M. Reyes",
    department: "General",
    time: "9:00 AM",
    branch: "Lahug",
    physician: "Dr. Santos",
    status: "Confirmed",
  },
  {
    initials: "JC",
    color: "bg-green-100 text-green-600",
    name: "J. Cruz",
    department: "Pediatrics",
    time: "10:30 AM",
    branch: "Mandaue",
    physician: "Dr. Flores",
    status: "Done",
  },
  {
    initials: "AL",
    color: "bg-amber-100 text-amber-600",
    name: "A. Lim",
    department: "Diagnostics",
    time: "1:15 PM",
    branch: "IT Park",
    physician: "Dr. Ramos",
    status: "Pending",
  },
  {
    initials: "SD",
    color: "bg-red-100 text-red-500",
    name: "S. Dela Cruz",
    department: "General",
    time: "3:00 PM",
    branch: "Talisay",
    physician: "Dr. Mendez",
    status: "Cancelled",
  },
  {
    initials: "RG",
    color: "bg-purple-100 text-purple-600",
    name: "R. Garcia",
    department: "Diagnostics",
    time: "4:30 PM",
    branch: "Ayala",
    physician: "Dr. Reyes",
    status: "Confirmed",
  },
  {
    initials: "BM",
    color: "bg-yellow-100 text-yellow-600",
    name: "B. Macaraeg",
    department: "General",
    time: "5:00 PM",
    branch: "Lahug",
    physician: "Dr. Santos",
    status: "Pending",
  },
];

const statusStyles = {
  Confirmed: "bg-green-100 text-green-700",
  Done: "bg-blue-100 text-blue-600",
  Pending: "bg-amber-100 text-amber-600",
  Cancelled: "bg-red-100 text-red-500",
};

export const TodaysAppointments = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-semibold text-gray-900">
          Today's appointments
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          View all
          <span className="text-xs">↗</span>
        </a>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-xs font-medium text-gray-400 tracking-widest pb-3 pr-4 uppercase">
                Patient
              </th>
              <th className="text-left text-xs font-medium text-gray-400 tracking-widest pb-3 pr-4 uppercase">
                Time
              </th>
              <th className="text-left text-xs font-medium text-gray-400 tracking-widest pb-3 pr-4 uppercase">
                Branch
              </th>
              <th className="text-left text-xs font-medium text-gray-400 tracking-widest pb-3 pr-4 uppercase">
                Physician
              </th>
              <th className="text-left text-xs font-medium text-gray-400 tracking-widest pb-3 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {appointments.map((appt, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 transition-colors duration-100"
              >
                {/* Patient */}
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${appt.color}`}
                    >
                      {appt.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 leading-tight">
                        {appt.name}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {appt.department}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Time */}
                <td className="py-3.5 pr-4 text-gray-700 whitespace-nowrap">
                  {appt.time}
                </td>

                {/* Branch */}
                <td className="py-3.5 pr-4 text-gray-700">{appt.branch}</td>

                {/* Physician */}
                <td className="py-3.5 pr-4 text-gray-700">{appt.physician}</td>

                {/* Status */}
                <td className="py-3.5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[appt.status]}`}
                  >
                    {appt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodaysAppointments;
