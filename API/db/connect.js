const mongoose=require('mongoose');
const { options } = require('../Routes/products');
mongoURI="mongodb://localhost:27017/Ecommerce";
const connectdb=()=>{return mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
)
}

// Get the default connection
const db = mongoose.connection;

// Event listener for MongoDB connection
db.on('connected', () => {

  console.log('Connected to MongoDB');
});

// Event listener for MongoDB connection error
db.on('error', (error) => {
  console.log('MongoDB connection error:', error);
});
module.exports=connectdb;