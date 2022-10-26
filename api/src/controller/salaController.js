import { Router } from 'express'
import { enterSala, createSala } from '../repository/salaRepository.js';

const server = Router();

// Entrar em uma sala
server.get('/sala?', async (req, resp) => {
    try {
        const { sala } = req.query;
        if(!sala || sala === undefined) throw new Error('Sala não encontrada!'); 
        
        const resposta = await enterSala(sala); 
        resp.send(resposta);
    }catch(error) {
        resp.status(404).send({
            error: error.message
        });
    }
});

// Criar uma sala
server.post('/sala', async (req, resp) => {
    try{
        const info = req.body;
        const resposta = await createSala(info.userId, info.sala);
        resp.send({ id: resposta});
    }catch(error){
        resp.send({
            error: error.message
        })
    }
});

export default server;