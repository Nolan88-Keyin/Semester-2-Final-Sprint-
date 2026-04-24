import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'

function ProductDetails({ addToCart, fetchProductById }) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadProduct = async () => {
      const loadedProduct = await fetchProductById(id)
      setProduct(loadedProduct)
      setIsLoading(false)
    }

    loadProduct()
  }, [fetchProductById, id])

  return (
    <main>
      <section>
        <h1 style={{ marginLeft: '1rem' }}>Product Details</h1>
        {isLoading ? (
          <p>Loading product...</p>
        ) : !product ? (
          <p>Product not found.</p>
        ) : (
          <ProductDetail product={product} addToCart={addToCart} />
        )}
        
      </section>
    </main>
  )
}

export default ProductDetails
