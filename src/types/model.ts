import Model from '@nozbe/watermelondb/Model'

export interface ICategory extends Model {
  id: string
  name?: string
}

export interface ICategories {
  categories: ICategory[]
}
