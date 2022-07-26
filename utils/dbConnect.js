import mongoose from 'mongoose';

async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return false;
  }

  await mongoose.connect(process.env.MONGODB_URI, {});

  return true;
}

export default dbConnect;
