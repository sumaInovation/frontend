import { useEffect, useRef, useState } from 'react';

export default function useWebSocket(url) {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const websocketRef = useRef(null);

  useEffect(() => {
    // Open WebSocket connection
    const ws = new WebSocket(url);
    websocketRef.current = ws;

    // Handle connection open
    ws.onopen = () => {
      setIsConnected(true);
      console.log("Connected to WebSocket");
    };

    // Handle incoming messages
    ws.onmessage = (event) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    // Handle connection close
    ws.onclose = () => {
      setIsConnected(false);
      console.log("Disconnected from WebSocket");
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, [url]);

  // Function to send a message
  const sendMessage = (message) => {
    if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
      websocketRef.current.send(message);
    }
  };

  return { messages, sendMessage, isConnected };
}
