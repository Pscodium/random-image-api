import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import { Images } from "./entity/Images";
import { Colors } from "./entity/Colors";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: 'utf8mb4',
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Images, Colors],
    migrations: [],
    subscribers: [],
});
