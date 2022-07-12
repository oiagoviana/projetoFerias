import './login.scss'
import { login } from '../../api/usuarioapi.js'
import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login () {

    const [email, setEmail ] =useState ('');
    const [senha, setSenha ] =useState ('');
    const [erro,setErro] =useState ('');
    const [carregando,setCarregando] =useState (false)
    

    const navigate= useNavigate ()
    const ref= useRef ()
    

    useEffect(() => {
        if(storage('usuario-logado')){
            navigate('/home')
        }
    }, [])

    async function entrarClique () {
        ref.current.continuousStart();
        setCarregando (true)
        try {
            const resposta = await login (email, senha)
            storage('usuario-logado', resposta)
            setTimeout(() => {
                navigate('/home')
            }, 1500)
            ref.current.complete()

        } catch (err) {
            ref.current.complete()
            setCarregando(false)
            if(err.response.status===401){
                setErro(err.response.data.erro)
            }
        }
    }

    return (
        <main className='malo'> 
            <LoadingBar color='#f11946' ref={ref} />

            <div className='in'> <img src= "/assets/images/hime.svg"/> </div>


            <div className='sv'>Seja Bem-Vindo!</div>

            <div className='inpu'>

            <div className='ema'>
                <label>E-mail:</label>

                <input placeholder='alessa@gmail.com' className='paco' value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>

            <div className='se'>
                <label>Senha:</label>

                <input placeholder='***********' type='password' className='paco' value={senha} onChange={e => setSenha(e.target.value)}></input>
            </div>

            </div>

            <button className='en' onClick={entrarClique} disabled= {carregando}> ENTRAR </button>

            <div className='erro'>
                {erro}
            </div>


        </main>
    )
}



