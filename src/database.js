import mongoose from 'mongoose'
import config from "./config";

// Docker container should exists
//const url = "mongodb://172.16.0.0:27017/companydb"
const url = config.DB_URL;
console.log('Environment: ',process.env.NODE_ENV);
mongoose.connect(url)
    .then(db => console.log('db es connected'))
    .catch(error => console.log(error))
