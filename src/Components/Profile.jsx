
import React, { useContext } from 'react'
import { Mycontext } from '../Context/UserContext'

const Profile = () => {

  const { username, setUsername } = useContext(Mycontext);

  return (
    <div>
      <h2>Profile Component</h2>
      <h2>Welcome, {username}</h2>

      <button onClick={() => setUsername("Ali")}>
        Change Name
      </button>
    </div>
  )
}

export default Profile;