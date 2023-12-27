import mongoose from "mongoose";
import { config } from "dotenv";
 
export const database = async () => {
  try {
    console.log(process.env.COLL_DB);
    const { connection } = await mongoose.connect(process.env.COLL_DB);
    console.log(process.env.COLL_DB);
    console.log(`database connected ${connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
