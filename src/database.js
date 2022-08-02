import mongoose from 'mongoose'

// Docker container should exists
mongoose.connect("mongodb://localhost:27017/companydb")
    .then(db => console.log('db es connected'))
    .catch(error => console.log(error))
