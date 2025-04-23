import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbConfig } from "./config/database.js";
export const AppDataSource = new DataSource(dbConfig);