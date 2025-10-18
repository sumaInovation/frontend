import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🚀 Full Stack App</h1>
      <p>Frontend: React (Vite)</p>
      <p>Backend says: <b>{msg}</b></p>
    </div>
  );
}

export default App;
