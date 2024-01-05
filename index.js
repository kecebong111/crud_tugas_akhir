const express = require("express");
const app = express();
const PORT = 6969;

app.use(express.json()); // Middleware to parse JSON data

const userRoute = require("./routes/user"); // Import the user route
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
