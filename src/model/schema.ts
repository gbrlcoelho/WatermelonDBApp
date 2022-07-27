import {appSchema, tableSchema} from '@nozbe/watermelondb/Schema'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'categories',
      columns: [{name: 'name', type: 'string'}],
    }),
  ],
})
