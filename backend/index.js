import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router.js";
import { database } from "./configs/db.js";
import { config } from "dotenv";

const app = express();


config({
    path: "./configs/config.env"
})



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);
database()

app.listen(4000, () => {

    console.log("server running on port 4000");
});
