import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login/login';
import Home from './pages/home/home'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}