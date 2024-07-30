require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const utils = require('./utils');
const jwt = require('jsonwebtoken');
const config = require('./config')

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  const skipUrls = ["/user/register", "/user/login"];
  if (skipUrls.findIndex((item) => item == req.url) != -1) {
    next();
  } else {
        const token = req.headers.token
        if(!token){
            res.send(utils.createError('Missing token'))
        }
        else {
            try {
                const payload = jwt.verify( token, config.secret )
                req.data = payload
                next()
            } catch (ex) {
                res.send(utils.createError('Invalid token'))
            }
        }
  }
});

const userRouter = require("./router/user");
const buyRouter = require("./router/buy");

app.use("/user", userRouter);
app.use("/buy", buyRouter);

app.listen(port, () => {
  console.log(`Server started @ port : ${port}`);
});
