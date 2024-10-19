import { Database } from 'duckdb-async'

const db = await Database.create('example.duckdb')

console.log('db:init')

await db.run(
  'create or replace table products (id integer primary key, name string, price integer)'
)

console.log('db:load')

await db.run("insert into products values (1, 'T-shirt', 1000);")
await db.run("insert into products values (2, 'Pants', 3000);")

