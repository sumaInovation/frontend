import React, { useState, useEffect } from 'react';
// import { useState } from 'react';
import useWebSocket from 'react-use-websocket';

 const WebSocketClient = () => {
  // URL of your WebSocket server
  const socketUrl = 'ws://localhost:5000'; // Replace with your WebSocket server URL

  // Using the `useWebSocket` hook
 
  const[length,setLenght]=useState(0);
  const[todayruntime,setTodayruntime]=useState(0);
  const[todaybreakingtime,setTodaybreakingtime]=useState(0);
  const [displayruntime,setDisplayruntime]=useState(0);
  const[displaybreakingtime,setDisplaybreakingtime]=useState(0);
  const[currentstate,setCurrentstate]=useState(0);
     const data=["amal","kamal"]

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => console.log('WebSocket connection opened'),
    onClose: () => console.log('WebSocket connection closed'),
    onError: (error) => console.error('WebSocket error: ', error),
    onMessage: (message) => {
      // Parse the incoming JSON data and update state
      try{
        const data = JSON.parse(message.data);
        const {current_breaking_time,current_running_time,run_time,stop_time}=data;
        if(run_time!==undefined){
          setTodayruntime(run_time);
        
        }
        if(stop_time!==undefined){
          setTodaybreakingtime(stop_time);
        }
        if(current_running_time!==undefined){
           setDisplayruntime(parseInt(current_running_time,10)+parseInt(todayruntime,10));
           setCurrentstate(1);
        }
        if(current_breaking_time!==undefined){
          setDisplaybreakingtime(parseInt(current_breaking_time,10)+parseInt(todaybreakingtime,10));
          setCurrentstate(0);

        }
        
      }catch{

      }
      
    }
  });
  


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Machine Data Monitoring</h1>
          <p className="text-lg text-gray-500">Tracking the machine's run time, break time, and state percentages</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Running Time Card */}
          <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Running Time</h3>
            <div className="text-2xl font-bold text-gray-800">{displayruntime} mins</div>
          </div>

          {/* Break Time Card */}
          <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Break Time</h3>
            <div className="text-2xl font-bold text-gray-800">{displaybreakingtime} mins</div>
          </div>

          {/* Current State Card */}
          <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Current State</h3>
            <div
              className={`text-2xl font-bold ${
                currentstate === 1 ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {currentstate===1?"Running":"IDLE"}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">State Percentages</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Running Time:</span>
                <span className="font-bold text-gray-800">{((displayruntime/(displaybreakingtime+displayruntime))*100).toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Break Time:</span>
                <span className="font-bold text-gray-800">{((displaybreakingtime/(displaybreakingtime+displayruntime))*100).toFixed(2)}%</span>
              </div>
            </div>

            {/* Progress bars for state percentages */}
            <div className="mt-4">
              <div className="text-sm text-gray-500">Running Time</div>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="h-4 bg-green-600 rounded-full"
                  style={{ width: `${(displayruntime/(displaybreakingtime+displayruntime))*100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-500 mt-4">Break Time</div>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="h-4 bg-yellow-600 rounded-full"
                  style={{ width: `${(displaybreakingtime/(displaybreakingtime+displayruntime))*100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSocketClient;
