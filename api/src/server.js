const express = require('express');
const router = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

server.name = 'API';
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/api', router);

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://notesapp-front.vercel.app/');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With', 'Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, DELETE'
    );
    next();
});

server.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || error;
    console.error(error);
    res.status(status).send(message);
})

module.exports = server;