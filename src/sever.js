// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server running on ws://localhost:8080');

const machines = [
  { id: 1, status: 'running', runningTime: 0, breakdownTime: 0 },
  { id: 2, status: 'breakdown', runningTime: 0, breakdownTime: 0 },
];

// Simulate machine status updates
setInterval(() => {
  machines.forEach((machine) => {
    if (machine.status === 'running') {
      machine.runningTime += 1;
    } else {
      machine.breakdownTime += 1;
    }

    // Randomly toggle status for simulation
    if (Math.random() > 0.95) {
      machine.status = machine.status === 'running' ? 'breakdown' : 'running';
    }
  });

  // Broadcast updated data to all connected clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(machines));
    }
  });
}, 1000); // Send updates every second