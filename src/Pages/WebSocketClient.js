import React, { useEffect } from 'react';
import { useState } from 'react';
import useWebSocket from 'react-use-websocket';

const WebSocketClient = () => {
  // URL of your WebSocket server
  const socketUrl = 'ws://localhost:3001'; // Replace with your WebSocket server URL

  // Using the `useWebSocket` hook
 
  const [todayrun,setTodayrun]=useState(0);
  const [todaybreake,setTodaybreake]=useState(0);
  const[machinestate,setMachinestate]=useState(0);
  const[currenttime,setCurrenttime]=useState(0);
  const[length,setLenght]=useState(0);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    useEffect(() => {
      if (lastMessage !== null) {
        try{
          const parsedData = JSON.parse(lastMessage.data);
          if('ToTRun' in parsedData){
            setTodayrun(parseInt(parsedData['ToTRun'],10))
          }
          if('ToTBreake' in parsedData){
          
            setTodaybreake(parseInt(parsedData['ToTBreake'],10))
          }
          if('machinestate' in parsedData){

            setCurrenttime(parsedData['currenttime']);
            setMachinestate(parseInt(parsedData['machinestate'],10));
            setLenght(parsedData['Lenght'])
            
          }
          

        }catch(error){

        }
        
      }
    }, [lastMessage]);
 
 
    function convertSecondsToHMSS(seconds) {
    const hours = Math.floor(seconds / 3600);  // Get the number of hours
    const minutes = Math.floor((seconds % 3600) / 60);  // Get the number of minutes
    const remainingSeconds = seconds % 60;  // Get the remaining seconds

    return `${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
  }

  return (
        <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Users */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">MACHINE STATE & LENGTH</h2>
          <p className="mt-2 text-2xl font-bold text-blue-500"> 
          {lastMessage ? (
        <div>
          <h2>STATE: {machinestate===1?"Machine is running":"Machine stop"}</h2>
        </div>
      ) : (
        <div>No data received yet</div>
      )}
          </p>
          <p className="mt-2 text-2xl font-bold text-blue-500"> 
          {lastMessage ? (
        <div>
          <h2>LENGTH: {length}</h2>
        </div>
      ) : (
        <div>No data received yet</div>
      )}
          </p>
          <p className="mt-2 text-2xl font-bold text-blue-500"> {}</p>
        
        </div>

        {/* Card 2: Orders */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Today {} Running Hours</h2>
          <p className="mt-2 text-2xl font-bold text-green-500">{machinestate?`${parseInt(todayrun,10)+parseInt(currenttime,10)}`:`${todayrun}`}</p>
        </div>

        {/* Card 3: Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Today {} Breakdown Hours</h2>
          <p className="mt-2 text-2xl font-bold text-yellow-500">{machinestate?`${parseInt(todaybreake,10)}`:`${parseInt(todaybreake,10)+parseInt(currenttime,10)}`}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Real-time Monitoring</h2>
        <p className="mt-2 text-sm text-gray-500">You {readyState===1 ? "Connected" : "Disconnected"} with server</p>
        <p className="mt-2 text-sm text-gray-500">Server is updates every 5seconds</p>
      </div>
    </div>
  );
};

export default WebSocketClient;
