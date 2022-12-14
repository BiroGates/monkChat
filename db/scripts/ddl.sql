drop database if exists monkChat;
create database if not exists monkChat;

create table tb_usuario(
	id_usuario		int primary key auto_increment,
    nm_usuario		varchar(200),
    ds_email		varchar(200),
    ds_senha		varchar(200),
    dt_criacao		datetime
);

create table tb_mensagem(
	id_mensagem		int primary key auto_increment,
    id_sala			int,
	id_usuario		int,
    ds_mensagem		varchar(200),
    dt_mensagem		datetime,
	FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario),
    FOREIGN KEY (id_sala) REFERENCES tb_sala(id_sala)
);

create table tb_sala(
	id_sala			int primary key auto_increment,
    id_usuario		int,
    nm_sala			varchar(100)    
);