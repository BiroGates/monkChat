import { con } from './connection.js';


export async function enterSala(sala) {
    const command = `
        select 	id_sala
        from 	tb_sala
        where	nm_sala = ?
        `;

    const [resposta] = await con.query(command, [sala]);
    return resposta[0];
}

export async function createSala(userId, sala) {
    const command = `
    insert into tb_sala(id_usuario, nm_sala) values (?, ?);
    `;

    const [resposta] = await con.query(command, [userId, sala]);
    return resposta.insertId;
}