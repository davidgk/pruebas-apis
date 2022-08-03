import mongoose from 'mongoose'

// Docker container should exists
//const url = "mongodb://172.16.0.0:27017/companydb"
const url = "mongodb://localhost:27017/companydb"

mongoose.connect(url)
    .then(db => console.log('db es connected'))
    .catch(error => console.log(error))
