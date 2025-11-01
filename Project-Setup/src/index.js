const express = require('express');
const PORT = require('./config/server.config');
const router = require('./routes');//
// const customRouter = require('./routes/customRouter');


const app = express();

app.use('/api', router);//localhost:3000/api/home
// app.use('/custom', customRouter);

app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
});

/*
HW: how will you manage these kinda routes using express router?
localhost:3000/api/v1/products/:id
localhost:3000/api/v1/categories/:id
localhost:3000/api/v2/products/:id
localhost:3000/api/v2/categories/:id
localhost:3000/api/v2/users/:id
*/
