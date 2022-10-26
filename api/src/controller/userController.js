import { Router } from "express";

import { userRegister, userLogin, userGetInfo, userUpdate } from "../repository/userRepository.js";

const server = Router();

server.get('/user/information/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await userGetInfo(id);
        resp.send(resposta);   
    }catch(error) {
        resp.send({
            error: error.message
        });
    }
});

server.post('/user/login', async (req, resp) => {
    try{
        const user = req.body;
        const resposta = await userLogin(user);
        resp.send(resposta);
    }catch(error){
        resp.send({
            error: error.message
        });
    }
});

server.post('/user/register', async (req, resp) => {
    try{
        const user = req.body;
        const resposta = await userRegister(user);
        resp.send({
            x: resposta
        });
    }catch(error){
        resp.send({
            error: error.message
        });
    }
})

server.put('/user/update/:id', async (req, resp) => {
    try{
        const user = req.body;
        const { id } = req.params
        const resposta = await userUpdate(user, id);   
        resp.send(user);
    }catch (error) {
        resp.send({
            error: error.message
        });
    }
})

export default server