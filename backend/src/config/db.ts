import mongoose from 'mongoose';
import config from '../../config';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.db);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
}