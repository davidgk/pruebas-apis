import config from "../src/config";
import mongoose from "mongoose";
if (!process.env.NODE_ENV){
    process.env.NODE_ENV = 'test'
}
const url = config.DB_URL_TEST;
console.log('Environment: ',process.env.NODE_ENV);
mongoose.connect(url)
    .then(db => console.log('db es connected'))
    .catch(error => console.log(error))
