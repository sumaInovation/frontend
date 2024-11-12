import React, { useState } from "react";
import useWebSocket from "../hooks/useWebSocket";

const Test = () => {
  const { messages, sendMessage, isConnected } = useWebSocket("wss://myserver-21m76djx.b4a.run/");
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    sendMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <div>
      <h1 className="py-8 text-4xl font-bold text-center text-white md:text-7xl ">DATA MONITORING SYSTEM</h1>
      <p>Status: {isConnected ? "Connected" : "Disconnected"}</p>

      <div className="  text-lg text-white text-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} disabled={!isConnected}>
          SEND MESSAGE
        </button>
      </div>

      <div className="  text-lg text-white text-center">
        <h2>Sensor Value:
        <ul>
          {/* {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))} */}
          {messages[messages.length-1]}
        </ul>
        </h2>
      </div>
    </div>
  );
};

export default Test;
