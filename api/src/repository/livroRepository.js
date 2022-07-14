import { con } from "./connection.js";


export async function inserirLivro(livro) {
    const comando = 
    `INSERT INTO tb_livro (id_usuario, nm_livro, nm_autor, ds_isbn, ds_editora, ds_edicao, ds_sinopse, dt_publicacao, ds_idioma, bt_disponivel, qtd_paginas, vl_preco, img_capa )
    VALUES (?, ?, ?, ?, ?,  ?, ?, ?,?, ?, ?, ?, ?)`
    
    const [resposta] = await con.query(comando, [livro.usuario, livro.nome, livro.autor, livro.isbn, livro.editora, livro.edicao, livro.sinopse, livro.publicacao, livro.idioma, livro.disponivel, livro.paginas, livro.preco, livro.capa]);
    livro.id = resposta.insertId
    return livro;
}

export async function listarTodosLivros() {
    const comando = 
    `SELECT 	id_usuario			id,
                nm_livro			Nome,
                nm_autor			Autor,
                ds_isbn				Isbn,
                ds_editora			Editora,
                ds_edicao			Edição,
                ds_sinopse			Sinopse,
                dt_publicacao		Publicação,
                ds_idioma			Idioma,
                bt_disponivel		Disponivel,
                qtd_paginas			Páginas,
                vl_preco			Preço
       FROM	    tb_livro`
    
    const [resposta] = await con.query(comando);
    return resposta;
}

export async function listarPorNome(nome) {
    const comando =
        `SELECT id_usuario			id,
		        nm_livro			Nome,
                nm_autor			Autor,
                ds_isbn				Isbn,
                ds_editora			Editora,
                ds_edicao			Edição,
                ds_sinopse			Sinopse,
                dt_publicacao		Publicacao,
                ds_idioma			Idioma,
                bt_disponivel		Disponivel,
                qtd_paginas			Páginas,
                vl_preco			Preço,
                img_capa			Imagem
          FROM  tb_livro
         WHERE  nm_livro			like ?`

    const [resposta] = await con.query(comando, [`%${nome}%`])
    return resposta;
}

export async function listarPorId(id) {
    const comando = 
    `SELECT id_usuario			id,
            nm_livro			Nome,
            nm_autor			Autor,
            ds_isbn				Isbn,
            ds_editora			Editora,
            ds_edicao			Edição,
            ds_sinopse			Sinopse,
            dt_publicacao		Publicacao,
            ds_idioma			Idioma,
            bt_disponivel		Disponivel,
            qtd_paginas			Páginas,
            vl_preco			Preço,
            img_capa			Imagem
      FROM  tb_livro
     WHERE  id_livro			=?`
    
    const [resposta] = await con.query(comando, [id])
    return resposta[0];
}

export async function alterarLivro(id, livro) {
    const comando =
        `UPDATE 	tb_livro
            SET     nm_livro			=?,
                    nm_autor			=?,
                    ds_isbn				=?,
                    ds_editora			=?,
                    ds_edicao			=?,
                    ds_sinopse			=?,
                    dt_publicacao		=?,
                    ds_idioma			=?,
                    bt_disponivel		=?,
                    qtd_paginas			=?,
                    vl_preco			=?
          WHERE	    id_livro			=?`
          
    const [resposta] = await con.query(comando, [livro.nome, livro.autor, livro.isbn, livro.editora, livro.edicao, livro.sinopse, livro.publicacao, livro.idioma, livro.disponivel, livro.paginas, livro.preco, id])
    console.log(resposta);
    return resposta.affectedRows;
    
}

export async function alterarImagem(imagem, id) {
    const comando =
        `UPDATE tb_livro
            SET img_capa =?
          WHERE id_livro =?`;
    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}

export async function deletarLivro(id) {
    const comando = 
    `DELETE 
       FROM tb_livro
      WHERE id_livro = ?`
    
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows
}