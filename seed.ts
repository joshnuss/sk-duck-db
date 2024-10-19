import { Database } from 'duckdb-async'
import path from 'node:path'

const dir = process.env.VERCEL ? 'static' : ''
const file = path.join(dir, 'example.duckdb')

console.log(`db:create ${file}`)

const db = await Database.create(file)

console.log('db:init')

await db.run(
  'create or replace table products (id integer primary key, name string, price integer)'
)

console.log('db:load')

await db.run("insert into products values (1, 'T-shirt', 1000);")
await db.run("insert into products values (2, 'Pants', 3000);")

