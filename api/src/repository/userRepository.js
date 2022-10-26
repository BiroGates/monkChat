import { con } from './connection.js';

export async function userGetInfo(id) {
    const command = `
    select 	nm_usuario      as name,
		    ds_email        as email,
            ds_senha        as senha
    from	tb_usuario
    where	id_usuario = ?;`;

    const [resposta] = await con.query(command, [id]);
    return resposta[0];
}

export async function userLogin(user) {
   const command = `
   select 	id_usuario,
            nm_usuario,
            ds_email,
            ds_senha
    from	tb_usuario
    where	ds_email = ?
    and 	ds_senha = ?`;

    const [resposta] = await con.query(command, [user.email, user.senha]);
    return resposta[0];
}

export async function userRegister(user) {
    const command = `
    insert into tb_usuario(nm_usuario, ds_email, ds_senha, dt_criacao) 
                   values (?, ?, ?, ?)
    `
    
    let date = new Date();
    const [resposta] = await con.query(command, [user.name, user.email, user.senha, date]);
    
    return resposta.insertId;
}

export async function userUpdate(user, id) {
    const command = `
    update 	tb_usuario
    set     nm_usuario  = ?,
            ds_email    = ?,
            ds_senha    = ?
    where	id_usuario  = ?`;

    const [resposta] = await con.query(command, [user.name, user.email, user.senha, id]);
    return resposta.affectedRows;
}