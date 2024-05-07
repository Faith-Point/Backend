import 'dotenv/config';
import { createConnection } from 'typeorm';
//docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
createConnection();