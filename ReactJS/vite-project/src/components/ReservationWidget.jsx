import React, { useState } from "react";

const ReservationWidget = () => {
  const [step, setStep] = useState(1); 
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("2024-12-05");
  const [time, setTime] = useState("13:00");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleConfirm = () => {
    const bookingDetails = {
      people,
      date,
      time,
      name,
      phone,
    };
    console.log("Booking Details:", bookingDetails);
    alert("Reservation confirmed!");
    setStep(1); 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {step === 1 && (
        <div className="bg-white shadow-md rounded-md p-6 text-center max-w-md w-full">
          <h2 className="text-xl font-bold mb-2">Book a table</h2>
          <p className="text-gray-600 mb-4">This is where you'll add the details of your booking</p>
          <div className="bg-blue-100 rounded-md p-3 mb-3 text-left">
            <label className="block text-gray-700 text-sm font-bold mb-1">
              People
            </label>
            <input
              type="number"
              className="bg-white text-black rounded-md border border-gray-300 p-2 w-full"
              min="1"
              max="10"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>
          <div className="bg-blue-100 rounded-md p-3 mb-3 text-left">
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Date
            </label>
            <input
              type="date"
              className="bg-white text-black rounded-md border border-gray-300 p-2 w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="bg-blue-100 rounded-md p-3 mb-4 text-left">
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Time
            </label>
            <input
              type="time"
              className="bg-white text-black rounded-md border border-gray-300 p-2 w-full"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full"
            onClick={() => setStep(2)}
          >
            Book now
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white shadow-md rounded-md p-6 text-center max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Contact details</h2>
          <p className="bg-blue-100 rounded-md p-3 text-left mb-4">
            You are making a reservation for{" "}
            <span className="font-bold">{people} persons</span>, on{" "}
            <span className="font-bold">{date}</span> at{" "}
            <span className="font-bold">{time}</span>.
          </p>
          <div className="mb-3">
            <input
              type="text"
              className="bg-white text-black rounded-md border border-gray-300 p-2 w-full"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="bg-white text-black rounded-md border border-gray-300 p-2 w-full"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 w-full"
            onClick={handleConfirm}
          >
            Confirm reservation
          </button>
        </div>
      )}
    </div>
  );
};

export default ReservationWidget;
