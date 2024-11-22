import React, { useEffect, useState } from "react";
import useWebSocket from "../hooks/useWebSocket";
import axios from "axios";

const WebSocketClient = () => {
  const { messages, sendMessage, isConnected } = useWebSocket("wss://googlesheet-yuetcisb.b4a.run/");
  const [inputMessage, setInputMessage] = useState("");
  const [runnintime,setRuningtime]=useState(0);
  const [breakingtime,setBreakingtime]=useState(0);
  
    
  
   var m=String(messages[messages.length-1]);
   var machinestate=m.split(',')[0];
   var currenttime=m.split(',')[1];
   var currentrunningtime=0;
   var currentbreaketime=0;
   if(parseInt(machinestate,10)==1){
    currentrunningtime=currenttime
   }else{
    currentbreaketime=currenttime;
   }

   //Conver to second hours.minutes.seconds format
  function convertSecondsToHMSS(seconds) {
    const hours = Math.floor(seconds / 3600);  // Get the number of hours
    const minutes = Math.floor((seconds % 3600) / 60);  // Get the number of minutes
    const remainingSeconds = seconds % 60;  // Get the remaining seconds

    return `${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
  }

  var todayrunningtime=100//parseInt(runnintime,10)+parseInt(currentrunningtime,10)
  var todaybreakingtime=parseInt(breakingtime,10)+parseInt(currentbreaketime,10)
  // Get the current date
  const currentDate = new Date();

  // Extract year, month, and day
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
  const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero if day is single digit

  // Format the date as yyyy/mm/dd
  const startformattedDate = `${year}/${month}/${day}`;
  
  
  const autoreadrunninglength=async(e)=>{
    
   try{
    const data={
      "startDate":startformattedDate,
     "endDate":startformattedDate,
     "Sheet":"Sheet1"
     }
    const result = await axios.post("https://googlesheet-yuetcisb.b4a.run/serchdata", data);
    setRuningtime(result.data.Length);
  
    
   }catch(err){

   }
   

  }

  const autoreadbreakinglength=async(e)=>{
    
    try{
     const data={
      "startDate":startformattedDate,
      "endDate":startformattedDate,
      "Sheet":"Sheet2"
      }
     const result = await axios.post("https://googlesheet-yuetcisb.b4a.run//serchdata", data);
     setBreakingtime(result.data.Length);
     
     
    }catch(err){
 
    }
    
 
   }
  
  const handleSendMessage = () => {
    sendMessage(inputMessage);
    setInputMessage("");
  };
  useEffect(()=>{
    setInterval(()=>{
    // setRuningtime(Math.floor(Math.random() * 1000));
    // setBreakingtime(Math.floor(Math.random() * 10))
    autoreadrunninglength();
    autoreadbreakinglength();
  

    
    
    },5000)


  },[]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Users */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Machine State</h2>
          <p className="mt-2 text-2xl font-bold text-blue-500"> {parseInt(machinestate,10)?"Machine is running":"Machine stop"}</p>
          <p className="mt-2 text-2xl font-bold text-blue-500"> {m.split(',')[2]}</p>
        
        </div>

        {/* Card 2: Orders */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Today {startformattedDate} Running Hours</h2>
          <p className="mt-2 text-2xl font-bold text-green-500">{todayrunningtime}</p>
        </div>

        {/* Card 3: Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Today {startformattedDate} Breakdown Hours</h2>
          <p className="mt-2 text-2xl font-bold text-yellow-500">{todaybreakingtime}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Real-time Monitoring</h2>
        <p className="mt-2 text-sm text-gray-500">You {isConnected ? "Connected" : "Disconnected"} with server</p>
        <p className="mt-2 text-sm text-gray-500">Server is updates every 5seconds</p>
      </div>
    </div>
  );

};

export default WebSocketClient;
