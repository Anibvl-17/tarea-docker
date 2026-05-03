"use strict";
import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./configEnv.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: `${DB_HOST}`,
  port: DB_PORT,
  username: `${DB_USER}`,
  password: `${DB_PASSWORD}`,
  database: `${DB_NAME}`,
  entities: ["src/entities/**/*.js"],
  synchronize: true,
  logging: false,
});

export async function connectDb() {
  try {
    await AppDataSource.initialize();
    console.log("=> Conexión a base de datos exitosa.");
  } catch (error) {
    console.error("=> Error al conectar con la base de datos.", error);
    process.exit(1);
  }
}
