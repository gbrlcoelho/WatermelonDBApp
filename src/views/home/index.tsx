import React from 'react'
import {database} from '../../services/watermelon'
import withObservables from '@nozbe/with-observables'
import {TaskList} from '../../components/TaskList/TaskList'

const db = database.collections.get('categories')
const observerTasks = () => db.query().observe()

const enhanceWithtasks = withObservables([], () => ({
  categories: observerTasks(),
}))

const TaskListRender = enhanceWithtasks(TaskList)

export const Home = () => {
  return <TaskListRender />
}
