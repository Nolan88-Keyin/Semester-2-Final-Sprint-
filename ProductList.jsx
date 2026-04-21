import { Link } from "react-router-dom";

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2 className="section-title">Products</h2>

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

            <button
              className="primary-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;