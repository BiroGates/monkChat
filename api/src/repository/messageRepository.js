import { con } from './connection.js'

// Buscar mensagens de uma sala
export async function getMessages(salaId) {
    const command = `
    select 		ds_mensagem		as mensagem, 
                dt_mensagem		as envio,
                nm_usuario		as usuario,
                nm_sala			as sala
    from 		tb_mensagem
    inner join	tb_sala on tb_mensagem.id_sala = tb_sala.id_sala
    inner join 	tb_usuario on tb_mensagem.id_usuario = tb_usuario.id_usuario
    where 		tb_sala.id_sala = ?`;

    const [resposta] = await con.query(command, [salaId]);

    return resposta
}

// Enviar Mensagem
export async function sendMessages(salaId, userId, message) {
    const command = `
    insert into tb_mensagem(id_sala, id_usuario, ds_mensagem, dt_mensagem) 
                    values (?, ?, ?, ?)
    `;
    let date = new Date();
    const [resposta] = await con.query(command, [salaId, userId, message, date]);
    return resposta.affectedRows;
}