import { io } from './http.js';

import { getMessages, sendMessages } from '../repository/messageRepository.js';

io.on('connection', async (socket) => {
    
    // Enviando mensagem pra todos as pessoas logadas na sala
    socket.on('receive_message', async (data) => {
        let r = await getMessages(data.salaId);
        socket.emit('receive_message', r);
    });

    // Recebendo mensagem e salvando na API
    socket.on('send_message', async (data) => {
        let r = await sendMessages(data.salaId, data.userId, data.message);
    });
});

