import { useUserContext } from "../../contexts/userContext"

export function Header() {
  const {user, signIn, signOut} = useUserContext()

  return (
    <header>
      <h1>
        {
          user !== null
          ? `Welcome ${user.name}`
          : "Welcome"
        }
      </h1>
      <button onClick={user === null ? signIn : signOut}>Sign In</button>
    </header>
  )
}