import React from 'react'
import {ICategory} from '../../../types/model'
import {ListItemContainer, Title} from './styles'

interface CategoriesProps {
  categories: ICategory
}

export const ListItem = ({categories}: CategoriesProps) => {
  return (
    <ListItemContainer>
      <Title>{categories.name}</Title>
    </ListItemContainer>
  )
}
