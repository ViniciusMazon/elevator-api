module.exports = {
  development: {
    database: 'elevator',
    username: 'admin',
    password: 'password',
    dialect: 'postgres',
    port: 5432,
    define: {
      timestamps: true,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: 5432,
    define: {
      timestamps: true,
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432,
    define: {
      timestamps: true,
    },
  },
};
