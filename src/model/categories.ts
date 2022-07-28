import {Model} from '@nozbe/watermelondb'
import {field} from '@nozbe/watermelondb/decorators'

export default class Categories extends Model {
  static table = 'categories'

  @field('name') name: any
}
