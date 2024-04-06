import mongoose from "mongoose";
let cached = (global).mongoose || { conn: null, promise: null };
export const connectToDatabase = async () => {
    try {
      if (cached.conn) return cached.conn;
      if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is missing");
      cached.promise =
        cached.promise ||
        mongoose.connect(process.env.MONGODB_URI, {
          dbName: "AlumniConnectDB",
          bufferCommands: false,
        });
    
      cached.conn = await cached.promise;
      console.log("Database Connection successfully......🚀");
      return cached.conn
      }
     catch (error) {
      console.log("Database Connection failed......🥲");
    }
  }