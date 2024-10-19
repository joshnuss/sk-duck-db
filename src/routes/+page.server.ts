import { Database, OPEN_READONLY } from 'duckdb-async'
import fs from 'node:fs/promises'
import path from 'node:path'

export async function load() {
  console.log('cwd', process.cwd())
  // try {
  //   const usr = path.join(process.cwd(), 'usr')
  //   const files = await fs.readdir(usr)

  //   files.forEach(file => {
  //     console.log(usr, file)
  //   })
  // } catch (e) {
  //   console.error(e)
  // }

  const db = await Database.create(process.cwd() + '/example.duckdb', OPEN_READONLY)

  const products = await db.all('select * from products')

  console.log(products)

  return {
    products
  }
}
