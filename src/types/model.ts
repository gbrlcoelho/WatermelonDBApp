import Model from '@nozbe/watermelondb/Model'

export interface Itask extends Model {
  id: string
  name?: string
}

export interface Itasks {
  categories: Itask[]
}
