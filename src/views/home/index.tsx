import React from 'react'
import {database} from '../../services/watermelon'
import withObservables from '@nozbe/with-observables'
import {CategoryList} from '../../components/CategoryList/CategoryList'

const db = database.collections.get('categories')
const observerCategories = () => db.query().observe()

const enhanceWithCategories = withObservables([], () => ({
  categories: observerCategories(),
}))

const CategoryListRender = enhanceWithCategories(CategoryList)

export const Home = () => {
  return <CategoryListRender />
}
