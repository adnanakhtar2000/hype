import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Navigation from './src/services/navigations'


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Navigation />
    </SafeAreaView>
  )
}

export default App