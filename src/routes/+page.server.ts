import { Database, OPEN_READONLY } from 'duckdb-async'

const db = await Database.create('example.duckdb', OPEN_READONLY)

export async function load() {
  const products = await db.all('select * from products')

  console.log(products)

  return {
    products
  }
}
