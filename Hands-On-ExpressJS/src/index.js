
const express = require('express');//returns function.
const bodyParser = require('body-parser');
// console.log( typeof express);
//when we call the function express we create a new express server object.

const app = express();//internally calls http.createServer.

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));//for form-urlencoded. -> for non-ascii characters.


app.get('/home', (req, res) => {//http request object, https response object.
    console.log("Home page/route");
    console.log(req.url, req.query);
    console.log(req.body);
    return res.json({ msg: 'OK' });
});


app.listen(3000, () => {
    console.log("Server started at port 3000");
});

