import config from "../src/config";
import mongoose from "mongoose";
if (!process.env.NODE_ENV){
    process.env.NODE_ENV = 'test'
}
const url = config.DB_URL_TEST;
console.log('Environment: ',process.env.NODE_ENV);
export const mockResponse =() => {
    const res = {};
    // replace the following () => res
    // with your function stub/mock of choice
    // making sure they still return `res`
    res.status = () => res;
    res.json = () => res;
    return res;
};
export const initializeDb = async () => {
    await mongoose.connect(url)
        .then(db => console.log('db es connected'))
        .catch(error => console.log(error))
}
