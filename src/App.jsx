import React from 'react'
import UserContext from './Context/UserContext'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'

const App = () => {
  return (
    <div>
      <UserContext>

        <h1>UserContext Example</h1>
        <Profile/>
        <hr/>
        <Dashboard/>
      </UserContext>
      
    </div>
  )
}

export default App
