import React, { useState } from 'react'
import './index.scss';

// Api 
import { userRegister } from '../../api/userAPI';

import { toast } from 'react-toastify'

export default function Register() {
    const [nickname, setNickname] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    
    async function register() {
        try{
            const id = await userRegister({name: nickname, senha: senha, email: email});
            toast.dark('😃 Bem vindo ao MonkChat');
        }catch(error){
            toast.dark(error.response.data.error);
        }
    }

    return (
        <div className='register-page'>
            <div className='left-side'>
                <img src="/assets/images/logo.png" alt="" />
                <h2>MonkChat</h2>
            </div>

            <div className='right-side'>
                <div className='login-section'>
                    <div className='inputs-container'>
                        <div className='titulo'>Crie sua conta</div>
                        <div className='inputs'>
                            <label>Nickname</label>
                            <input type="text" value={nickname} onChange={(e)=>setNickname(e.target.value)}/>
                            <label>E-mail</label>
                            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label>Senha</label>
                            <input type="text" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                        </div>
                        <div onClick={() => register()} className='btn'>Criar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
