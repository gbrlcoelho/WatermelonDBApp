import React from 'react'
import {database} from '../../../services/watermelon'
import {Itask} from '../../../types/model'
import withObservables from '@nozbe/with-observables'
import {Button, ButtonsView, ListItemContainer, Title} from './styles'

interface tasksProps {
  categories: Itask
}

const RawListItem = ({categories}: tasksProps) => {
  const handleDeleteTask = async () => {
    await database.write(async () => {
      const category = await database.get('categories').find(categories.id)
      await category.destroyPermanently()
    })
  }

  const handleUpdateTask = async () => {
    await database.write(async () => {
      const category = (await database.get('categories').find(categories.id)) as any
      await category.update(() => {
        category.name = `Tarefa ${categories.name} concluída!`
      })
    })
  }

  return (
    <ListItemContainer>
      <Title>{categories.name}</Title>
      <ButtonsView>
        <Button backgroundColor='#DC3545' onPress={handleDeleteTask}>
          <Title>Deletar</Title>
        </Button>
        <Button backgroundColor='#28A745' onPress={handleUpdateTask}>
          <Title>Modificar</Title>
        </Button>
      </ButtonsView>
    </ListItemContainer>
  )
}

export const ListItem = withObservables(['categories'], ({categories}) => ({
  categories,
}))(RawListItem)
