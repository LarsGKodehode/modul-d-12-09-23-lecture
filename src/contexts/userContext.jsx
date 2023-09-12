import { createContext, useContext } from "react"

const userContext = createContext()

export function UserContextProvider(properties) {
  const {children, value} = properties

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}

export function useUserContext() {
  return useContext(userContext)
}
