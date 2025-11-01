const express = require('express');
const PORT = require('./config/server.config');
const apiRouter = require('./routes');//

const app = express();

app.use('/api', apiRouter);//localhost:3000/api/v1/ping.

app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
});


