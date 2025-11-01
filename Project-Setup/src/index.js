const express = require('express');
const bodyParser = require('body-parser');
const PORT = require('./config/server.config');
const apiRouter = require('./routes');//

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());


app.use('/api', apiRouter);//localhost:3000/api/v1/todos.

app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
});


