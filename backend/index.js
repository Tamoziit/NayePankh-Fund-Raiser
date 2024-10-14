import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import connectRedis from "connect-redis";
dotenv.config();

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
//import { connectToRedisDB } from "./redis/redisConfig.js";
//import { redisClient } from "./redis/redisConfig.js";

const app = express();
/*const RedisStore = connectRedis(session);*/

const corsConfig = {
    origin: "*",
    methods: [
        'GET',
        'POST',
        'PATCH',
        'DELETE'
    ],
    allowHeaders: [
        'Content-Type'
    ],
    credentials: true
};

//middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(cors(corsConfig));
/*app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000
    }
}));*/

const PORT = process.env.PORT || 5000;

app.get("/np/api/v1", (req, res) => {
    res.send("<h1>NayePankh Fund Raiser</h1>");
});

//routes
app.use("/np/api/v1/auth", authRoutes);
app.use("/np/api/v1/payment", paymentRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    //connectToRedisDB();
    console.log(`Server listening on Port: ${PORT}`);
})
