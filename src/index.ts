import * as express from 'express';
import * as bodyParser from 'body-parser';
import axios from 'axios';


const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    console.info(`incoming request`)
    res.send("<html><h1>Welcome to SQ API</h1> </html>")
})

app.listen(port, function () {
    console.log(`Express server listening on port ${port}`)
})
