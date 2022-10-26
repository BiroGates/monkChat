import React, { useEffect, useState } from 'react'
import './index.scss';

// Api
import { userGetInfo, userUpdate } from '../../api/userAPI';

import storage from 'local-storage';
import { toast } from 'react-toastify';

export default function Update() {
    const userId = storage('user-logged');
    const [user, setUser] = useState({});

    async function updateUser() {
        try {
            let resp = await userUpdate(user, userId);
            toast.dark('✅ Informações alteradas com sucesso!');   
        }catch (error) {
            toast.dark(error.response.data.error);   
        }
    }

    async function getUser(){
        try{
            let user = await userGetInfo(userId)
            setUser(user);
        }catch(error){
            toast.dark(error.response.data.error);
        }
    } 
    useEffect(()=>{
        getUser();
    },[]);
    return (
        <div className='update-page'>
            <div className='left-side'>
                <img src="/assets/images/logo.png" alt="" />
                <h2>MonkChat</h2>
            </div>

            <div className='right-side'>
                <div className='login-section'>
                    <div className='inputs-container'>
                        <div className='titulo'>Alterar Conta</div>
                        <div className='inputs'>
                            <label>Nickname</label>
                            <input type="text" value={user.name ? user.name : ''} onChange={(e) => setUser({...user, name: e.target.value})} />
                            <label>E-mail</label>
                            <input type="text" value={user.email ? user.email : ''} onChange={(e) => setUser({...user, email: e.target.value})} />
                            <label>Senha</label>
                            <input type="text" value={user.senha ? user.senha : ''} onChange={(e) => setUser({...user, senha: e.target.value})}/>
                        </div>
                        <div onClick={() => updateUser()} className='btn'>Alterar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
