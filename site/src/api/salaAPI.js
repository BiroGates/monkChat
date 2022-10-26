import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function enterSala(sala) {
    const resposta = await api.get(`/sala?sala=${sala}`);
    console.log(resposta);
    return resposta.data
}

export async function createSala(userId, sala) {
    const resposta = await api.post(`/sala`, {
        userId: userId,
        sala: sala
    });

    return resposta.data
}