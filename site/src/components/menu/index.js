import storage from 'local-storage'
import './index.scss'
import { useNavigate, Link } from 'react-router-dom'


export default function Index(props) {
    const navigate = useNavigate();

    function sairClick(){
        storage.remove('usuario-logado');
        navigate('/');
    }

    function verificarMenuSelecionado(menu) {
        if (menu === props.selecionado)
            return 'selecionado';
        else
            return '';
    }

    return (

        <nav className='menu'>
            <div>
                <div className='logo'>
                    <img src='/assets/images/hime.svg' alt='logo'/>
                    <div>Booking Monk</div>
                </div>

                <div className='menu-opcoes'>
                    <Link to='/home' className={verificarMenuSelecionado('home')} >
                        <img className='imgs' src='/assets/images/home.svg' alt='home'/>
                        <div>Home</div>
                    </Link>

                    <Link to='/cadastrar' className={verificarMenuSelecionado('cadastrar')}>
                        <img className='imgs' src='/assets/images/cadastra.png' alt='cadastrar' />
                        <div>Cadastrar</div>
                    </Link>

                    <Link to='consultar' className={verificarMenuSelecionado('consultar')}>
                        <img className='imgs' src='/assets/images/consulta.png' alt='consultar' />
                        <div>Consultar</div>
                    </Link>
                </div>
            </div>
            <div className='menu-opcoes'>
                <a onClick={sairClick} href="#">
                    <img src='/assets/images/sair.png' alt='consultar' />
                    <div>Sair</div>
                </a>
            </div>
        </nav>
    );
}