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
            <Menu selecionado='home'/>
            <div className='container'>
                <Cabecalho />
                
                <div className='conteudo'>
                    <img className='logo' src='/assets/images/logo-styled.svg' alt='logo estilizado' />
                </div>
            </div>
        </main>
    )
}