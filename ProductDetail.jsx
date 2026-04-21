import { useParams, Link } from "react-router-dom";

function ProductDetail({ products, addToCart }) {
  let { id } = useParams();

  let product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="detail-page">
      <Link className="back-link" to="/">
        Back to Products
      </Link>

      <div className="detail-card">
        <img
          className="detail-image"
          src={product.image}
          alt={product.name}
        />

        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p>{product.description}</p>
          <p>Stock: {product.stock}</p>

          <button
            className="primary-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;