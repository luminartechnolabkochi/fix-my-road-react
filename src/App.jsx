import React from 'react'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
    <Routes>

      <Route path='/register' element={<SignUp></SignUp>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
