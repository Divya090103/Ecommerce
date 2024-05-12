const connectDB = require("./db/connect");
const Product = require("./Module/product");
const ProductJson = require("./productjson/Productdata.json");
const chokidar = require('chokidar');
const fs = require('fs');

const start = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB('mongodb://localhost:27017/Ecommerce');
    console.log('Database Connected');

    // Watch for changes in the JSON file
    chokidar.watch('./productjson/Productdata.json').on('change', async () => {
      console.log('JSON file changed, updating database...');

      // Read updated data from the JSON file
      const newData = JSON.parse(fs.readFileSync('./productjson/Productdata.json', 'utf8'));

      // Update the database with the new data
      await Product.deleteMany(); // Remove existing data
      await Product.create(newData); // Insert updated data

      console.log('Database updated successfully.');
    });

    console.log('Watcher started...');
  } catch (error) {
    console.error('Error:', error);
  }
};

start();
