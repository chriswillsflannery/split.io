const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POOL_URI,
});

module.exports = pool;