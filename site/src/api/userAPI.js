import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function userLogin(user){
    const resposta = await api.post('/user/login', {
        email: user.email.trim(),
        senha: user.senha.trim()
    });

    return resposta.data;
}

export async function userRegister(user) {
    const resposta = await api.post('/user/register', {
        name: user.name.trim(),
        email: user.email.trim(),
        senha: user.senha.trim()
    });

    return resposta.data;
}

export async function userUpdate(user, id) {
    const resposta = await api.put(`/user/update/${id}`, {
        name: user.name.trim(),
        email: user.email.trim(),
        senha: user.senha.trim()
    });

    return resposta.data;
}

export async function userGetInfo(id){
    const resposta = await api.get(`/user/information/${id}`);
    return resposta.data;
}
