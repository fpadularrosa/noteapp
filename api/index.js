require('dotenv').config();
const { MONGO_DB, API_PORT } = process.env;
const server = require('./src/server.js');
const mongoose = require('mongoose');

mongoose.connect(MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('database connected.');
    server.listen(API_PORT, (error) => {
        if(error) throw new Error(error);
        console.log('api listening at port: ', API_PORT);
    });
}).catch((error) => {
    console.error(error);
});