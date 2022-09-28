import './index.scss'
import storage from 'local-storage'
import { useEffect } from  'react'
import { useNavigate } from 'react-router-dom'

import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho/cabecalho'

export default function Home (){

    const navigate = useNavigate()
    useEffect (() => {
        if(!storage('usuario-logado')) {
            navigate ('/')
        }
    }) 

    return (
        <main className='maho'>
            <Cabecalho />
            <div className='container'>
            <div className='conteudo'>
                   
                </div>
                
                <Menu selecionado='home'/>
                
                
            </div>

            <div className='imagem'>
                <img src='/assets/images/groupe.png'></img>
            </div>
        </main>
    )
}