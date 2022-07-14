import multer from 'multer'
import { Router } from 'express'

import { alterarImagem, alterarLivro, deletarLivro, inserirLivro, listarPorId, listarPorNome, listarTodosLivros } from '../repository/livroRepository.js'

const server = Router();
const upload = multer({ dest: 'storage/capasLivro' })

server.post('/livro', async (req, resp) => {
    try {
        const novoLivro = req.body;

        if (!novoLivro.nome)
            throw new Error('Nome do livro é obrigatório!');
        
        if (!novoLivro.autor)
            throw new Error('Autor do livro é obrigatório!');
        
        if (!novoLivro.isbn)
            throw new Error('ISBN do livro é obrigatório!');
        
        if (!novoLivro.editora)
            throw new Error('Editora do livro é obrigatório!');
        
        if (!novoLivro.edicao)
            throw new Error('Edicão do livro é obrigatório!');
        
        if (!novoLivro.sinopse)
            throw new Error('Sinopse do livro é obrigatório!');
        
        if (!novoLivro.publicacao)
            throw new Error('Publicação do livro é obrigatório!');
        
        if (!novoLivro.idioma)
            throw new Error('Idioma do livro é obrigatório!');
        
        if (novoLivro.disponivel == undefined)
            throw new Error('Campo Disponível é obrigatório!');
        
        if (!novoLivro.paginas)
            throw new Error('Quantidade de páginas do livro é obrigatório!');
        
        if (!novoLivro.preco)
            throw new Error('Preço do livro é obrigatório!');
        
        if (!novoLivro.capa)
            throw new Error('Capa do livro é obrigatório!');


        const livroInserido = await inserirLivro(novoLivro);
        resp.send(livroInserido);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/livro', async (req, resp) => {
    try {
        const resposta = await listarTodosLivros();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/livro/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        const resposta = await listarPorNome(nome);

        if(resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/livro/:id', async(req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await listarPorId(id);

        if (!resposta)
            resp.status(404).send([])
        else
        resp.send(resposta);
        
        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.put('/livro/:id', async (req, resp) => {
    try {
        const { id } = req.params
        const livro = req.body;

        if (!livro.nome)
            throw new Error('Nome do livro é obrigatório!');
        
        if (!livro.autor)
            throw new Error('Autor do livro é obrigatório!');
        
        if (!livro.isbn)
            throw new Error('ISBN do livro é obrigatório!');
        
        if (!livro.editora)
            throw new Error('Editora do livro é obrigatório!');
        
        if (!livro.edicao)
            throw new Error('Edicão do livro é obrigatório!');
        
        if (!livro.sinopse)
            throw new Error('Sinopse do livro é obrigatório!');
        
        if (!livro.publicacao)
            throw new Error('Publicação do livro é obrigatório!');
        
        if (!livro.idioma)
            throw new Error('Idioma do livro é obrigatório!');
        
        if (livro.disponivel == undefined)
            throw new Error('Campo Disponível é obrigatório!');
        
        if (!livro.paginas)
            throw new Error('Quantidade de páginas do livro é obrigatório!');
        
        if (!livro.preco)
            throw new Error('Preço do livro é obrigatório!');
        

        const resposta = await alterarLivro(id, livro);

        if (resposta != 1)
            throw new Error('Livro não pode ser alterado')
        else
            resp.status(204).send();        

        
        } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.put('/livro/:id/capa', upload.single('capa'), async (req, resp) => {
    try {
        const { id } = req.params
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id)
        if (resposta != 1)
            throw new Error('A imagem não pode ser salva.')
        else
            resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.delete('/livro/:id', async (req, resp) => {
    try {
        const { id } = req.params

        const resposta = await deletarLivro(id)
        if (resposta != 1)
            throw new Error('Livro não pode ser removido')
        else
            resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
    })

export default server