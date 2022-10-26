import { Router } from "express";
import { getMessages, sendMessages } from "../repository/messageRepository.js"; 

const server = Router();

// Buscar mensagens de uma sala
server.get('/messages/:salaId', async (req, resp) => {
    try {
        const { salaId } = req.params; 
        const resposta = await getMessages(salaId);
        resp.send(resposta);
    } catch (error) {
        resp.send({
            error: error.message
        });
    }
});

server.post('/messages/:userId/:salaId', async (req, resp) => {
    try {
        const { message } = req.body;
        const { userId, salaId } = req.params;
        const resposta = await  sendMessages(salaId, userId, message);
        resp.send({
            x: resposta
        });
    } catch (error) {
        resp.send({
            error: error.message
        });
    }
})

export default server;