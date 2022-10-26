import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import './index.scss';

// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// API
import { userLogin } from '../../api/userAPI';

// Web Socket
import io from 'socket.io-client';

// Storage
import storage from 'local-storage'

const socket = io.connect("http://localhost:5000");

export default function Home() {  
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function login() {
      try {
        const resp = await userLogin({email: email, senha: senha}); 
        storage('user-logged', resp);
        toast.dark('Bem vindo de volta ' + resp.nm_usuario, { autoClose: 1500 });
        setTimeout(()=>{
          navigate('/chat');
        }, 2000);
      }catch (error) {
        toast.dark(error.response.data.error);
      }
    }
    useEffect(()=>{
      if(storage('user-logged')) navigate('/chat'); 
    
    },[]);
    return (
    <div className='login-page'>
      <div className='left-side'>
        <img src="/assets/images/logo.png" alt="" />
        <h2>MonkChat</h2>
      </div>

      <div className='right-side'>
        <div className='login-section'>
          <div className='inputs-container'>
            <div className='titulo'>Faça seu Login</div>
            <div className='inputs'>
              <label>E-mail</label>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <label>Senha</label>
              <input type="text" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
            </div>
            <div onClick={() => login()} className='btn'>Login</div>
          </div>
        </div>
      </div>
    </div>
  )
}
