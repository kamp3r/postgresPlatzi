import pg from "pg";

const getConnection = async () => {
  const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'my_store',
  });
  await client.connect();
  return client;
};

export {getConnection}
