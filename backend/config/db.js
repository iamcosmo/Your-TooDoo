import mongoose from 'mongoose';

export const connectDB = async () => {
    console.log('db connection started trials');
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `connected to the database ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`error in connecting to DB ,${error}`);
  }
};
