
import React from 'react'
import { createContext, useState } from 'react'
export const Mycontext = createContext();

const UserContext = ({ children }) => {

  const [username, setUsername] = useState("Shahzad");

  return (
    // provider
    <Mycontext.Provider value={{ username, setUsername }}>
      {children}
    </Mycontext.Provider>
  )
}

export default UserContext;