const path = require('path');
if(process.env.NODE_ENV !== "production") {
  require('dotenv').config({ path: path.join(__dirname, '../.env') });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to DB");
}

const initDB = async () => {
  await main();
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
  console.log(`Inserted ${initData.data.length} listings`);
  mongoose.connection.close();
};

initDB().catch((err) => {
  console.log("Error:", err);
});