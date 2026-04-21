import ProductList from "../components/ProductList";

function Home({ products, addToCart }) {
  return (
    <div>
      <h1 className="page-title">Better. Be. Vintage.</h1>
      <p className="page-subtitle">
        Timeless pieces. Modern attitude.
      </p>

      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default Home;