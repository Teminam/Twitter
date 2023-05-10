import {db} from '../db/database.js'

export async function findByUsername(username){
    return db.execute('select * from users where username=?', [username]).then((result) => result[0][0])
} // username 을 전달받아 user의 username과 일치할 시 반환

export async function createUser(user){
    const {username, password, name, email, url} = user
    return db.execute('insert into users (username, password, name, email, url) values (?, ?, ?, ?, ?)', [username, password, name, email, url]).then((result) => result[0].insertId)
}   // ?에 차례대로 넣어주겠다.

export async function findById(id){
    return db.execute('select id from users where id=?', [id]).then((result) => result[0][0])

}