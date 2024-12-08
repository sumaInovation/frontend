// import React from "react";

// const DynamicCard = ({ title, description, image, buttonText, onButtonClick }) => {
//   return (
//     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
//       <img className="w-full h-48 object-cover" src={image} alt={title} />
//       <div className="p-6">
//         <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
//         <p className="text-gray-600 text-base mt-2">{description}</p>

//         {/* Optional Button */}
//         {buttonText && onButtonClick && (
//           <button
//             onClick={onButtonClick}
//             className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DynamicCard;


import React, { useState, useEffect } from "react";

// Simulating real-time data fetch
const fetchMachineData = () => {
  return {
    temperature: (Math.random() * 100).toFixed(2),  // Random temperature between 0 and 100
    pressure: (Math.random() * 150).toFixed(2),    // Random pressure between 0 and 150
    status: Math.random() > 0.5 ? "Running" : "Stopped", // Random status (Running or Stopped)
    timestamp: new Date().toLocaleTimeString(),  // Current time
  };
};

const MachineCard = () => {
  const [machineData, setMachineData] = useState(fetchMachineData());

  useEffect(() => {
    const interval = setInterval(() => {
      setMachineData(fetchMachineData()); // Update data every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      
    </div>
  );
};

export default MachineCard;
