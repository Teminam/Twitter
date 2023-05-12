import MongoDb from 'mongodb'
import {config} from '../config.js'

let db;
export async function connectDB(){
    return MongoDb.MongoClient.connect(config.db.host)
    .then((client) => {
        db = client.db()
    })
}// 몽고디비는 스키마가 없음

export function getUsers(){
    return db.collection('users')
}

export function getTweets(){
    return db.collection('tweets')
}

