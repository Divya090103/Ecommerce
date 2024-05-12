const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const  connectdb  = require("./db/connect.js"); // Destructure connectdb from the module
const productsRouter = require("./Routes/products.js"); // Rename the variable for clarity

const start = async () => {
  try {
    await connectdb(); // Wait for the database connection to be established
    app.listen(port, () => {
      console.log(`${port} yes I am connected`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error); // Log any errors that occur during connection
  }
};

app.get("/", (req, res) => {
  res.send("Yes, I am live");
});

app.use("/api/products", productsRouter); // Mount the products router

start();
