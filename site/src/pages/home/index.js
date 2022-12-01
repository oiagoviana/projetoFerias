import './index.scss'
import storage from 'local-storage'
import { useEffect } from  'react'
import { useNavigate } from 'react-router-dom'

import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

export default function Home (){

    const navigate = useNavigate()
    useEffect (() => {
        if(!storage('usuario-logado')) {
            navigate ('/')
        }
    }) 

    return (
        <main className='maho'>
            <div className='div-home'>
                <Menu selecionado='home' />
            </div>
            
            <div className='div-direita'>
                <Cabecalho />
                <img src='/assets/images/groupe.png' className='imagem' alt='' />
                

            </div>
            
            
        </main>
    )
}