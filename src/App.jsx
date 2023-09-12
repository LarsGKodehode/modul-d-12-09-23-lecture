import { UserContextProvider} from "./contexts/userContext"
import { ProductsGrid } from "./components/ProductsGrid/ProductsGrid"
import { Header } from "./components/Header/Header"

export default function App() {
  return (
    <UserContextProvider>
      <div>
        <Header />

        <main>
          <ProductsGrid />
        </main>
      </div>
    </UserContextProvider>
  )
}