import React from 'react'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import AddIssue from './pages/AddIssue'
import IssuesList from './pages/IssuesList'

function App() {
  return (
   <BrowserRouter>
    <Routes>

      <Route path='/register' element={<SignUp></SignUp>}></Route>
      <Route path='/login' element={<SignIn></SignIn>}></Route>
      <Route path='/issues-add' element={<AddIssue></AddIssue>} ></Route>
      <Route path="/issues-list" element={<IssuesList></IssuesList>}></Route>
    
    </Routes>
   </BrowserRouter>
  )
}

export default App


// issues list
// issues add
// issue report
// logout
// contextApi