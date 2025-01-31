if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./router/index");
const errorHandler = require("./middleware/errorHandling");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);
app.use(router);

app.listen(port, () => {
    console.log(`listen to port ${port}`);
});
