import mysql from 'mysql2'
import {config} from '../config.js'
import SQ from 'sequelize'

const {host, user, database, password} = config.db

export const sequelize = new SQ.Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    logging: false,
    // timezone: '+09:00'
    timezone: "Asia/Seoul"  // 똑같음

})

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
