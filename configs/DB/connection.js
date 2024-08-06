const mongoose = require('mongoose');
const { logger } = require('../../services/logger.service');
const dbName = 'TRELLO'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://gulab:gulab@cluster0.9otpy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const message = `MongoDB Connected: ${conn.connection.host}`
    logger.info(message)


    return connectDB;;


  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = { connectDB, dbName };
