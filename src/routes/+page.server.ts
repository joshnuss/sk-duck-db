import { Database, OPEN_READONLY } from 'duckdb-async'
import fs from 'fs/promises'
import path from 'path'

export async function load() {
  console.log('cwd', process.cwd())
  const files = await fs.readdir(path.join(process.cwd(), 'usr'))

  files.forEach(file => {
    console.log('usr', file)
  })

  const db = await Database.create('example.duckdb', OPEN_READONLY)

  const products = await db.all('select * from products')

  console.log(products)

  return {
    products
  }
}
