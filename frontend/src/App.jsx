import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
    </Routes>
    </>
  )
}

export default App