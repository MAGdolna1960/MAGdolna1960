import './App.css'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/layouts/Layout'

import Home from './Pages/Home'


function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
