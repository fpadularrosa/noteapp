require('dotenv').config({ path: './.env' });
const server = require('./src/server.js');
const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('database connected.');
        server.listen(`${process.env.PORT}`, (error) => {
            if (error) throw new Error(error);
            console.log('api listening at port: ', process.env.PORT);
        });
    }).catch((error) => {
        console.error(error);
    });