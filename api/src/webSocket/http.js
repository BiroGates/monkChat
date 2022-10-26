import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';


const app = express();
app.use(express.json());
app.use(cors());


const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors:{
        origin:["http://localhost:3000", "http://localhost:3001"],
        methods:["GET", "POST"]
    }
});

export {serverHttp, io, app}
