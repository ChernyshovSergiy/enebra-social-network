// const User = require('./users');
require('./users');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('../../app');

dotenv.config({ path: '/home/enebra/WebstormProjects/enebra-social-network/config.env' });
const DB =
    process.env.DB === 'dl'
        ? process.env.DATABASE_LOCAL
        : process.env.DATABASE_FOREIGN.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.set('useCreateIndex', true);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connections successful!!!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${DB}`);
});
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
