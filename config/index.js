import dotenv from 'dotenv';
dotenv.config();
const config = { port: process.env.PORT || '8080',
                 sequilizeConfig: {
                        host: process.env.HOST,
                        port: process.env.DB_PORT,
                        dialect: process.env.DIALECT,
                        username: process.env.DB_USER,
                        password: process.env.DB_PASSWORD,
                        database: process.env.DB_NAME,
                      } };
export default  config;