import React from 'react'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'

function App() {
  return (
   <BrowserRouter>
    <Routes>

      <Route path='/register' element={<SignUp></SignUp>}></Route>
      <Route path='/login' element={<SignIn></SignIn>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App


// issues list
// issues add
// issue report
// logout