import React from 'react'
import {StatusBar} from 'react-native'
import {Home} from './src/views/home'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#222'} />
      <Home />
    </>
  )
}

export default App
