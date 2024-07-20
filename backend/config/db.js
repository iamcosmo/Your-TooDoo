import mongoose from 'mongoose';


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to the database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`error in connecting to DB ,${error}`);
  }
};
