import './index.scss'
import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

export default function Cadastrar() {


    return (
        <main className="page-cadastrar">
            <div className='div-home'>
                <Menu selecionado='cadastrar' />
            </div>

            <div className='div-direita'>
                <Cabecalho />

                <div className='card-cadastrar'>
                    <div className='cadastro-header'>
                        <div className='linha-cadastro'></div>
                        <h3>Cadastrar Novo Livro</h3>
                    </div>


                </div>
                

            </div>

        </main>
    );
}