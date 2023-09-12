import { useState } from "react"
import { UserContextProvider, useUserContext } from "./contexts/userContext"

export default function App() {
  const [user, setUser] = useState(null)

  function signIn() {
    setUser({
      name: "Lars",
    })
  }

  function signOut() {
    setUser(null)
  }

  return (
    <UserContextProvider value={user}>
      <div>
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

        <main>
          <ProductsGrid />
        </main>
      </div>
    </UserContextProvider>
  )
}

function ProductsGrid(properties) {
  return (
    <div>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

function ProductCard() {
  const user = useUserContext()

  function addToWishlist() {
    if (user === null) return

    console.log(`Adding Vacuum Cleaner to ${user.name}'s wishlist`)
  }

  return (
    <article>
      <h2>Vacuum Cleaner</h2>
       {
        <button onClick={addToWishlist}>Add to WishList</button>
       }
    </article>
  )
}