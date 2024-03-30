import mongoose from "mongoose";

//const MONGODB_URL = 'mongodb+srv://monawwarazal:iamazal123@cluster0.gmpuy7v.mongodb.net/';
const MONGODB_URL = 'mongodb+srv://Rathin:t7bDU9WCY6UcYShy@cluster0.imi0t6e.mongodb.net/';

let cached = (global).mongoose || { conn: null, promise: null };
export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;
  
    if (!MONGODB_URL) throw new Error("MONGODB_URI is missing");
  
    cached.promise =
      cached.promise ||
      mongoose.connect(MONGODB_URL, {
        dbName: "AlumniConnectDB",
        bufferCommands: false,
      });
  
    cached.conn = await cached.promise;
  
    return cached.conn

    }