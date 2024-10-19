import { Database, OPEN_READONLY } from 'duckdb-async'

export async function load() {
  const db = await Database.create('static/example.duckdb', OPEN_READONLY)

  const products = await db.all('select * from products')

  console.log(products)

  return {
    products
  }
}
