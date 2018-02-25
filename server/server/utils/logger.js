import winston from 'winston';

const logOptions = {
    transports: [],
};

if (process.env.LOGS) {
    logOptions.transports.push(new (winston.transports.Console)());
}

export default new (winston.Logger)(logOptions);

