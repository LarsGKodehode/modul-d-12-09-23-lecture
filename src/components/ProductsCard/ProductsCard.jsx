import { useUserContext } from "../../contexts/userContext"

export function ProductCard() {
  const { user } = useUserContext()

  function addToWishlist() {
    if (user === null) {
      console.warn("User not logged in")
    } else {
      console.log(`Adding Vacuum Cleaner to ${user.name}'s wishlist`)
    }
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