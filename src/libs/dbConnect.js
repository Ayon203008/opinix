import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // development এ গ্লোবাল ভ্যারিয়েবল ব্যবহার করি
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // production এ নতুন client connect করি
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
