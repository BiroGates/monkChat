use monkChat;

-- =============== USER ======================

-- POST
insert into tb_usuario(nm_usuario, ds_email, ds_senha, dt_criacao) 
			   values ("Gustavo Alves", "teste@teste.com", "15963210", "2020-09-10 10:20:34");

-- GET
select 	nm_usuario,
		ds_email,
        ds_senha
from	tb_usuario
where	ds_email = "teste@teste.com"
and 	ds_senha = "15963210";

-- GET
select 	nm_usuario,
		ds_email,
        ds_senha
from	tb_usuario
where	id_usuario = '';

-- PUT
update 	tb_usuario
set     nm_usuario = '',
		ds_email = '',
        ds_senha = ''
where	id_usuario = '';


-- =============== MESSAGES ======================


-- =============== SALAS ======================