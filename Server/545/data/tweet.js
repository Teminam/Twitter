import MongoDb from 'mongodb'
import {getTweets} from '../db/database.js'
import * as UserRepository from './auth.js'

const ObjectID = MongoDb.ObjectId



export async function getAll(){
    return null
}

export async function getAllByUsername(username){
    return null
}

export async function getById(id){
    return null
}

export async function create(text, userId){
    return UserRepository.findById(userId)
    .then((user) => getTweets().insertOne({
        text,
        createdAt: new Date(),
        userId,
        name: user.name,
        username: user.username,
        url: user.url
    })).then((result) => console.log(result)).then(mapOptionalTweet)
}

export async function update(id, text){
    return null
}

export async function remove(id){
    return null
}

function mapOptionalTweet(tweet){
    return tweet ? {...tweet, id: tweet._id.toString()} : tweet; 
}