import storage from 'local-storage'
import { useEffect } from  'react'
import { useNavigate } from   'react-router-dom'

export default function Home (){

    const navigate = useNavigate()
    useEffect (() => {
        if(!storage('usuario-logado')) {
            navigate ('/')
        }
    }) 

    return (
        <main className='maho'>
            <h1>oi</h1>
        </main>
    )
}