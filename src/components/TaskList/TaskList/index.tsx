import React from 'react'
import {FlatList} from 'react-native'
import {Itasks} from '../../../types/model'
import {AddTask} from '../../AddTask'
import {ListItem} from '../ListItem'
import {ContainerFlat} from './styles'

export const TaskList = ({categories}: Itasks) => {
  return (
    <ContainerFlat>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ListItem categories={item} />}
        ListHeaderComponent={() => <AddTask />}
      />
    </ContainerFlat>
  )
}
