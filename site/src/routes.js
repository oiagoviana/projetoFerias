import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login';
import Home from './pages/home'
import Cadastrar from './pages/cadastrar'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/cadastrar' element= {<Cadastrar/>}/>
            </Routes>
        </BrowserRouter>
    )
}