require('dotenv').config({ path: './.env' });
const { 
    API_PORT,
    MONGO_NAME,
    MONGO_HOST,
    PASSWORD_MONGO,
    MONGO_USER,
} = process.env;
const server = require('./src/server.js');
const mongoose = require('mongoose');

mongoose.connect(`${MONGO_NAME}://${MONGO_USER}:${PASSWORD_MONGO}@${MONGO_HOST}/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('database connected.');
        server.listen(API_PORT, (error) => {
            if (error) throw new Error(error);
            console.log('api listening at port: ', API_PORT);
        });
    }).catch((error) => {
        console.error(error);
    });