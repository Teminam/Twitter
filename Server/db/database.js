import mysql from 'mysql2'
import {config} from '../config.js'

const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password
})

export const db = pool.promise()

/*
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
host: process.env.DB_HOST,
user: process.env.DB_USER,
database: process.env.DB_DATABASE,
password: process.env.DB_PASSWORD
})

export const db = pool.promise()
*/
