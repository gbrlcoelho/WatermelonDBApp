import {Database} from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import schema from '../model/schema'
import migrations from '../model/migrations'
import categories from '../model/categories'

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: 'WatermelonDB',
})

export const database = new Database({
  adapter,
  modelClasses: [categories],
})
