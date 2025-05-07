import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


dotenv.config({ path: process.env.ENV_PATH || '.env.local' });

if (!process.env.DATABASE_URL) {
    console.log(process.env);
    throw new Error("❌ Error: DATABASE_URL no está configurada en el archivo .env");
}

const sequelize = new Sequelize('todo_db', 'root', '', {
    host: process.env.DB_HOST,
    dialect: "mysql",/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    dialectModule: require('mysql2'),
  });
export default sequelize;