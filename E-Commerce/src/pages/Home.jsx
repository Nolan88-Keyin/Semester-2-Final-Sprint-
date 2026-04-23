import { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'

function Home({ fetchProducts, addToCart }) {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      const loadedProducts = await fetchProducts()
      setProducts(loadedProducts)
      setIsLoading(false)
      console.log("LOADED:", loadedProducts)
    }

    loadProducts()
  }, [fetchProducts])

  return (
    <main>
      <section>
        <h1>Better. Be. Vintage.</h1>
        <p>Timeless pieces. Modern attitude.</p>
        {isLoading ? (
          <p>Loading products...</p>
        ) : (
          <ProductList products={products} addToCart={addToCart} />
        )}
      </section>
    </main>
  )
}

export default Home
