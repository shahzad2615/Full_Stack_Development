
import React, { useContext } from 'react'
import { Mycontext } from '../Context/UserContext'
const Dashboard = () => {

  const { username } = useContext(Mycontext);

  return (
    <div>
      <h2>Dashboard Component</h2>
      <h2>Username: {username}</h2>
    </div>
  )
}

export default Dashboard;