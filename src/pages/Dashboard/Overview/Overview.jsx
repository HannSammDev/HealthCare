import { Card } from "primereact/card";
import { FiCalendar, FiUsers, FiFileText, FiXCircle } from "react-icons/fi";
import TodaysAppointments from "./Appointments";
import { Book } from "../../../components/Features/Book";
import { Booking } from "../../../components/Features/Booking";

export const Overview = () => {
  const today = new Date();

  const stats = [
    {
      title: "Appointments today",
      value: "148",
      subtitle: "+11% vs yesterday",
      icon: FiCalendar,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      subtitleColor: "text-green-600",
    },
    {
      title: "New patients this month",
      value: "634",
      subtitle: "+8% vs last month",
      icon: FiUsers,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      subtitleColor: "text-green-600",
    },
    {
      title: "Pending lab results",
      value: "27",
      subtitle: "Across all 5 branches",
      icon: FiFileText,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      subtitleColor: "text-gray-500",
    },
    {
      title: "Cancellation rate",
      value: "4.2%",
      subtitle: "-1.3% improvement",
      icon: FiXCircle,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      subtitleColor: "text-red-500",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
        <p className="text-sm text-gray-500 mt-1">
          {today.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}{" "}
          · All branches · Cebu
        </p>
      </div>

      {/* Statistics */}
      <div className="grid mb-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <Card
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition-all duration-300  "
            >
              <div className="flex items-start justify-between">
                <p className="text-gray-500 text-sm font-light">{item.title}</p>

                <div
                  className={`w-10 h-10 rounded-2xl ${item.iconBg} flex items-center justify-center`}
                >
                  <Icon className={`w-4 h-4 ${item.iconColor}`} />
                </div>
              </div>

              <div className="mt-1">
                <h2 className="text-3xl font-bold text-gray-900">
                  {item.value}
                </h2>

                <p className={`mt-3 text-sm font-medium ${item.subtitleColor}`}>
                  {item.subtitle}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_0.8fr]">
        <TodaysAppointments />
        <div className="flex justify-end not-first:bg-white dark:bg-white p-5 rounded-2xl border border-gray-100 shadow-sm ">
          <div className="w-full max-w-md">
            <div className="mb-5">
              <h2 className="text-base font-semibold text-gray-900">
                Book an appointment
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Fill out the form below to book an appointment.
              </p>
            </div>
            <Booking />
          </div>
        </div>
      </div>
    </>
  );
};
