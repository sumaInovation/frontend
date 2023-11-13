import React from 'react'
const socket = new WebSocket("wss://chatserver-466n.onrender.com")

// Connection opened
socket.addEventListener("open", event => {
  socket.send("Connection established")
});

// Listen for messages
socket.addEventListener("message", event => {
  console.log("Message from server ", event.data)
});
const SendMessage=(data)=>{
    socket.send(data);
    console.log(data)
}
const Wsclient = () => {
  return (
    <div>
      <button onClick={()=>{SendMessage("LEDON")}}>LED ON</button>
  
      <button onClick={()=>{SendMessage("LEDOFF")}}>LED OFF</button>
    </div>
  )
}

export default Wsclient
