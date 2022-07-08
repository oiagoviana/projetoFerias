INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
	 VALUES ('admin', 'admin@admin.com.br', '1234');
     select * from tb_usuario;
     
-- CS01 EFETUAR LOGIN
SELECT 	id_usuario			id,
		nm_usuario			nome,
		ds_email			email
  FROM 	tb_usuario
 WHERE	ds_email			= 'admin@admin.com.br'
   AND	ds_senha			= '1234';
   
   
-- CS02 INSERIR LIVRO

INSERT INTO tb_livro (id_usuario, nm_livro, nm_autor, ds_isbn, ds_editora, ds_edicao, ds_sinopse, dt_publicacao, ds_idioma, bt_disponivel, qtd_paginas, vl_preco, img_capa )
	 VALUES (1, 'teste', 'Lorrayne Viana', '9780470853207', 'Vieira',  '1', 'O livro mais esperado', '2001-01-01','Inglês', true, 300, '220.50', '111');
     
INSERT INTO tb_livro (id_usuario, nm_livro, nm_autor, ds_isbn, ds_editora, ds_edicao, ds_sinopse, dt_publicacao, ds_idioma, bt_disponivel, qtd_paginas, vl_preco, img_capa )
	 VALUES (?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?, ?);
     
-- CS03 LISTAR TODOS LIVROS

SELECT 	id_usuario			id,
		nm_livro			Nome,
        nm_autor			Autor,
        ds_isbn				Isbn,
        ds_editora			Editora,
        ds_edicao			Edição,
        ds_sinopse			Sinopse,
        ds_publicacao		Publicacao,
        ds_idioma			Idioma,
        bt_disponivel		Disponivel,
        qtd_paginas			Páginas,
        vl_preco			Preço,
        img_capa			Imagem
  FROM	tb_livro;
  
-- CS04 ALTERAR LIVRO POR ID

UPDATE 	tb_filme
   SET  nm_livro			=?,
        nm_autor			=?,
        ds_isbn				=?,
        ds_editora			=?,
        ds_edicao			=?,
        ds_sinopse			=?,
        ds_publicacao		=?,
        ds_idioma			=?,
        bt_disponivel		=?,
        qtd_paginas			=?,
        vl_preco			=?,
        img_capa			=?
  WHERE	id_livro			=?;
  

-- CS05	REMOVER LIVRO POR ID

DELETE FROM tb_livro
	  WHERE id_livro = ?;

  
-- CS06	BUSCAR LIVRO PRO NOME

SELECT  id_usuario			id,
		nm_livro			Nome,
        nm_autor			Autor,
        ds_isbn				Isbn,
        ds_editora			Editora,
        ds_edicao			Edição,
        ds_sinopse			Sinopse,
        ds_publicacao		Publicacao,
        ds_idioma			Idioma,
        bt_disponivel		Disponivel,
        qtd_paginas			Páginas,
        vl_preco			Preço,
        img_capa			Imagem
  FROM  tb_livro
 WHERE  nm_livro			like '%?%';

-- CS07 BUSCAR LIVRO POR ID  
  
SELECT  id_usuario			id,
		nm_livro			Nome,
        nm_autor			Autor,
        ds_isbn				Isbn,
        ds_editora			Editora,
        ds_edicao			Edição,
        ds_sinopse			Sinopse,
        ds_publicacao		Publicacao,
        ds_idioma			Idioma,
        bt_disponivel		Disponivel,
        qtd_paginas			Páginas,
        vl_preco			Preço,
        img_capa			Imagem
  FROM  tb_livro
 WHERE  id_livro			=?;