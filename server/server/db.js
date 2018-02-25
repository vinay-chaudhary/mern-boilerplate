import mongoose from 'mongoose';
import logger from './utils/logger';

const dbUrl = process.env.MONGOURL || 'mongodb://localhost:27017/mern-boilerplate';

mongoose.connect(
    dbUrl, {
        useMongoClient: true,
        reconnectTries: process.env.RECONNECTTRIES || 100,
        reconnectInterval: process.env.RECONNECTINTERVAL || 10000,
    }, (error) => {
        if (error) {
            logger.info('Please make sure Mongodb is installed and running!')
            throw error;
        }
        logger.info('Connected to DB successfully');
    }
);