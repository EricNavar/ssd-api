require('dotenv').config()

const connectDB = require('./connect');
const Video = require('./models/Video');

const {videos} = require('./data');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Video.deleteMany();
        await Video.create(videos);
        console.log('Success!!!!!!');
        process.exit(0);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

start();
