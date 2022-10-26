import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function getMessages(salaId) {
    const resposta = await api.get(`/messages/${salaId}`);
    return resposta.data;
}

export async function sendMessages(salaId, userId, message) {
    const resposta = await api.post(`/messages/${userId}/:${salaId}`, {
        message: message
    })
    return resposta.data;
}