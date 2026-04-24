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
    }

    loadProducts()
  }, [fetchProducts])

  return (
    <main className='page-containter'>
      <section className='hero-section'>
        <h2 className='page-title'>Better. Be. Vintage.</h2>
        <p className='page-subtitle'>Timeless pieces. Modern attitude.</p>
        </section>

        <section className='products-section'>
        {isLoading ? (
          <p className='empty-message'>Loading products...</p>
        ) : (
          <ProductList products={products} addToCart={addToCart} />
        )}
        </section>
    </main>
  )
}

export default Home
