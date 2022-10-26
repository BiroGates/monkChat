import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

import Home from './pages/home'
import Register from './pages/register'
import Update from './pages/update'
import Chat from './pages/chat'

export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/update' element={<Update/>}/>
            <Route exact path='/chat' element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
  )
}
