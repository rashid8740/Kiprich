"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const CustomCalendar = ({ onDateChange, selectedDate, setSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDateClick = (day) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    onDateChange(newDate.toISOString().split("T")[0]);
    setShowCalendar(false);
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={calendarRef}>
      <div className="flex items-center">
        <input
          type="text"
          value={selectedDate ? selectedDate.toLocaleDateString() : ""}
          readOnly
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f49a25] bg-white cursor-pointer"
          placeholder="Select a date"
          onClick={toggleCalendar}
        />
        <button
          type="button"
          className="absolute right-2 text-[#f49a25]"
          onClick={toggleCalendar}
        >
          <Calendar size={20} />
        </button>
      </div>
      {showCalendar && (
        <div className="absolute z-10 mt-1 bg-[#f4eee7] rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className="text-[#f49a25]">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-lg font-bold text-[#1c150d]">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button onClick={handleNextMonth} className="text-[#f49a25]">
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-medium text-[#1c150d]">
                {day}
              </div>
            ))}
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} className="h-8"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const isSelected =
                selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === currentDate.getMonth() &&
                selectedDate.getFullYear() === currentDate.getFullYear();
              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm
                    ${
                      isSelected
                        ? "bg-[#f49a25] text-white font-bold"
                        : "text-[#1c150d] hover:bg-[#f49a25] hover:text-white"
                    }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default function BookingSafari() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    destination: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // In a real-world scenario, you'd send this data to your server
    // Here, we're simulating an email being sent
    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log the data that would be sent
      console.log("Booking data:", {
        to: "rashdi8740@gmail.com",
        subject: "New Safari Booking",
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Date: ${formData.date}
          Destination: ${formData.destination}
        `,
      });

      setSubmitMessage(
        "Booking submitted successfully! We will contact you soon."
      );
      setFormData({ name: "", email: "", date: "", destination: "" });
      setSelectedDate(null);
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="my-12 bg-[#f4eee7] p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-[#1c150d]">
        Book Your Safari
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#1c150d] mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f49a25]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#1c150d] mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f49a25]"
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-[#1c150d] mb-1"
          >
            Preferred Date
          </label>
          <CustomCalendar
            onDateChange={handleDateChange}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div>
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-[#1c150d] mb-1"
          >
            Preferred Destination
          </label>
          <div className="relative">
            <div style={{ position: "relative", width: "100%" }}>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#fff8f0",
                  color: "#4a3f35",
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23f49a25' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "16px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 2px #e2d6c5",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  zIndex: 1,
                }}
                className="focus:outline-none hover:box-shadow-[0_4px_8px_rgba(0,0,0,0.1),0_0_0_2px_#f49a25]"
              >
                <option value="" disabled>
                  Select a destination
                </option>
                <option value="masai-mara">Masai Mara</option>
                <option value="amboseli">Amboseli</option>
                <option value="tsavo">Tsavo</option>
                <option value="lake-nakuru">Lake Nakuru</option>
              </select>
              <div
                style={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "8px",
                  boxShadow: "0 0 0 0 #f49a25",
                  opacity: 0,
                  transition: "opacity 0.3s ease, box-shadow 0.3s ease",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
                className="peer-focus:opacity-100 peer-focus:box-shadow-[0_0_0_2px_#f49a25]"
              />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06 0L10 10.36l3.71-3.15a.75.75 0 011.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#f49a25] text-[#1c150d] px-6 py-3 rounded-full text-lg font-bold hover:bg-[#e38d1e] transition-colors w-full md:w-auto ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Booking..." : "Book Now"}
          </button>
        </div>
      </form>
      {submitMessage && (
        <div
          className={`mt-4 p-3 rounded ${
            submitMessage.includes("successfully")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {submitMessage}
        </div>
      )}
    </section>
  );
}
