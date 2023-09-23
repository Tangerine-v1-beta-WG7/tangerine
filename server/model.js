const { Pool } = require('pg');
const dotenv = require('dotenv').config()

const PG_URI = process.env.PG_URI;

///const db = {};

const pool = new Pool({
    connectionString: PG_URI
  });

pool.on('connect', () => {
    console.log('connected!')
})


module.exports = {
    query: function (text, params, callback){
      console.log('executed query', text);
     return pool.query(text, params, callback);
  }
}