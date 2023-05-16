import Mongoose from 'mongoose';
import { config } from '../config.js';

let db;
export async function connectDB(){
    return Mongoose.connect(config.db.host);
}

export function useVirtualId(schema){
    schema.virtual('id').get(function(){
        return this._id.toString();
    })
    schema.set('toJSON', {virtuals: true})
    schema.set('toObject', {virtuals: true})
}
// 몽고디비는 스키마가 없음
// 비정형 형태, 규칙 따로 x

export function getUsers(){
    return db.collection('users');
}

export function getTweets(){
    return db.collection('Tweets');
}