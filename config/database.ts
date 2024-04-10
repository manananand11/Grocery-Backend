import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


// Database connection parameters
const database = process.env.DB_NAME!;
const username = process.env.DB_USER!;
const password = process.env.DB_PASSWORD!;
const host = process.env.DB_HOST!; 
const dialect = 'mysql';

// Initialize Sequelize
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
