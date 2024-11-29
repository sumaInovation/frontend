import React, { useState, useEffect } from 'react';

const WebSocketClient = () => {
    // State for managing WebSocket connection
    const [ws, setWs] = useState(null);
    const [message, setMessage] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);

    // Establish WebSocket connection when the component mounts
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5000'); // Your WebSocket server URL
        setWs(socket);

        // Handle incoming messages
        socket.onmessage = (event) => {
          try{
            const commingdata=JSON.parse(event.data);
            console.log('Message received:',commingdata);
            // Add received message to the list
             setReceivedMessages(commingdata);
          }catch{
         
          }
          
           
        };

        // Handle connection open
        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        // Handle WebSocket connection close
        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Handle WebSocket errors
        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Cleanup WebSocket connection on component unmount
        return () => {
            socket.close();
        };
    }, []);

    // Function to send a message
    const sendMessage = () => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            console.log('Sending message:', message);
            ws.send(message);
            setMessage(''); // Clear the input after sending
        } else {
            console.error('WebSocket is not open.');
        }
    };

    return (
       <></> 
    );
};

export default WebSocketClient;
