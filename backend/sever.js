const express = require('express');
const http = require("http");
const app = express();
const path=require('path');
const cookiesparser=require('cookie-parser');
const cors=require('cors');

const PORT = process.env.PORT||5002;
//use middleware
app.use(express.json())//allows to allowing req.body
app.use(cookiesparser())//allows pasre cookies
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))



if (process.env.NODE_ENV === "production") {
	// Serve static files from the "dist" folder
app.use(express.static(path.join(__dirname, '../sumaautomation/dist')));

// Catch-all route to serve `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../sumaautomation/dist/index.html'));
});
}
const server = http.createServer(app);



// Start the server
server.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});