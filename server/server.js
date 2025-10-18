import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve React static files
app.use(express.static(path.join(__dirname, "../client/dist")));

// Example API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend 👋" });
});

// Catch-all for React Router
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

