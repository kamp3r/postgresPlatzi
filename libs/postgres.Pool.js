import pg from "pg";

  const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'my_store',
  });

export {pool}
