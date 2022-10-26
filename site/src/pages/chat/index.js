import React, { useEffect, useState } from 'react'
import { getMessages } from '../../api/messageAPI.js';
import { createSala, enterSala } from '../../api/salaAPI'
import './index.scss';
import io from 'socket.io-client';

import storage from 'local-storage';

import { toast } from 'react-toastify'

const socket = io.connect("http://localhost:5000");

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [salaName, setSalaName] = useState('');
    const [inputText, setInputText] = useState('');
    
    
    const [salaId, setSalaId] = useState();
    const userId = storage('user-logged').id_usuario;
    const userNick = storage('user-logged').nm_usuario;

    async function enterRoom() {
        try{
            let r = await enterSala(salaName);
            setSalaId(r.id_sala);
            toast.dark('Sala encontada!', { autoClose: 1500 });
        }catch(error) {
            toast.dark(error.response.data.error, { autoClose: 1500 });
        }
    }

    async function createRoom() {
        try{
            let r = await createSala(userId, salaName);
            setSalaId(r.id);
            toast.dark('Sala criada com sucesso!', { autoClose: 1500 });
        }catch(error) {
            toast.dark(error.response.data.error);
        }
    }

    async function sendMessage(){
        socket.emit('send_message', {salaId: salaId, userId: userId, message: inputText});
    }
    
    socket.emit('receive_message', {salaId: salaId});
    socket.on('receive_message', data => {
        setMessages(data);
    })

    return (
    <div className='chat-page'>
        <div className='nav-bar'>
            <div>
                <img src="/assets/images/logo.png" alt="" />
                <label>MonkChat</label>
            </div>
            <label>Minha Conta</label>
        </div>
        <div className='chat-container'>
            <div className='left-side'>
                <div className='inputs'>
                    <div className='input'>
                        <label>Sala: </label>
                        <input type="text" value={salaName} onChange={(e)=>setSalaName(e.target.value)} />
                    </div>

                    <div className='input'>
                        <label>Nick: </label>
                        <input type="text" value={ userNick }/>
                    </div>

                    <div className='btns'>
                        <div onClick={()=> createRoom()}>Criar</div>
                        <div onClick={() => enterRoom()}>Entrar</div>
                    </div>
                </div>
                <div className='messages'>
                    <div>Mensagem: </div>
                    <textarea value={inputText} onChange={(e)=>setInputText(e.target.value)}></textarea>
                    <div onClick={()=>sendMessage()} className='btn'>Enviar</div>
                </div>
            </div>
            <div className='right-side'>
                <div className='messages-container'>
                    {!messages.length && 
                        <div className='not-found'>
                            <img src="/assets/images/404.png" alt="" />
                            <label>Essa sala não tem nenhuma mensagem ainda!</label>
                        </div>
                    }
                    {messages && messages.map((item) => {
                        return(
                            <div className='msg'>({item.envio.substring(11, 16)}) <span>{item.usuario}</span> : {item.mensagem} </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    )
}
