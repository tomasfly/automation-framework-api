import * as Auth from './middlewares/auth.middleware';
import { generateToken } from './utils/jwt.utils';
import { NextFunction, Request, Response, Router, } from 'express';
const router = Router();
import * as bodyParser from 'body-parser';
import axios from 'axios';
// Only generate a token for lower level environments
if (process.env.NODE_ENV !== 'production') {
  console.log('JWT', generateToconst app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


router
  .route('/')
  .get(
    Auth.authorize(['getTeams']),
    //Controller.getTeams
  );

apo.get("/", (req, res) => {uth.authorize(['getTeams']),
    Controller.getTeams
  );
    res.send("<html><h1>Welcome to scriptQuality API</h1> </html>")
})

app.listen(port, function () {
    console.log(`Express server listening on port ${port}`)
})

app.get("/users", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            res.json(response.data)
        }).catch(function (error) {
            res.json("Error occured!")
        })
})

