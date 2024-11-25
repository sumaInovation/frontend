
import { useState } from 'react';
import useWebSocket from 'react-use-websocket';

const WebSocketClient = () => {
  // URL of your WebSocket server
  const socketUrl = 'ws://localhost:5000'; // Replace with your WebSocket server URL

  // Using the `useWebSocket` hook
 
  const[length,setLenght]=useState("hello");

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => console.log('WebSocket connection opened'),
    onClose: () => console.log('WebSocket connection closed'),
    onError: (error) => console.error('WebSocket error: ', error),
    onMessage: (message) => {
      // Parse the incoming JSON data and update state
      try{
        const data = JSON.parse(message.data);
        const {current_breaking_time}=data;
        setLenght(current_breaking_time)
      }catch{

      }
      
    }
  });
 
 
    function convertSecondsToHMSS(seconds) {
    const hours = Math.floor(seconds / 3600);  // Get the number of hours
    const minutes = Math.floor((seconds % 3600) / 60);  // Get the number of minutes
    const remainingSeconds = seconds % 60;  // Get the remaining seconds

    return `${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
  }
      return(
        <>
          <h1  className='  text-stone-100  text-center text-5xl'>{length}</h1>
        </>
      )

};

export default WebSocketClient;
