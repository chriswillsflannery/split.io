const { Pool } = require('pg');

const pool = new Pool({
  user: 'kcwsgqnj',
  database: 'kcwsgqnj',
  host: 'salt.db.elephantsql.com',
  password: '9xfesQXr3c1QZWL461EWtOVRMUSQVHxS',
  port: 5432,
  connectionString: process.env.POOL_URI,
});

module.exports = pool;