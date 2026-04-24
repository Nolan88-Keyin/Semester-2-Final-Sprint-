// Displays grid of products with add/view options
import { Link } from "react-router-dom";

function ProductList({ products = [], addToCart }) {
  return (
    <div>
      <h2 className="section-title">PRODUCTS</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />

            <Link className="product-link" to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
            </Link>

            <p className="product-price">${product.price}</p>

            {addToCart ? (
              <button
                className="primary-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            ) : null}

            <Link className="primary-btn" to={`/product/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;