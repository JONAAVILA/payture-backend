import express from "express";
import router from "./routes/index.js";
import morgan from "morgan";
import cors from 'cors';
import { limiterCodes,limiterLogin } from './utils/limiter.js';

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use('/login/singin/token',limiterCodes)
server.use('/login/signin',limiterCodes)

server.use(router);

export default server;