import { createContext, useContext, useState } from "react"

const userContext = createContext()

export function UserContextProvider(properties) {
  const {children} = properties

  const [user, setUser] = useState(null)

  function signIn() {
    setUser({
      name: "Lars",
    })
  }

  function signOut() {
    setUser(null)
  }

  const value = {
    user,
    signIn,
    signOut
  }

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}

export function useUserContext() {
  return useContext(userContext)
}
