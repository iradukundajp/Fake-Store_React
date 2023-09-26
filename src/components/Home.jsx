
import "./Home.css";
import Laptops from "./Laptops";
import Phones from "./Phones";
import Vegetables from "./Vegetables";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Fake Store</h2>
      <p>
        In our store, you can find a wide range of products including
        vegetables, phones, and laptops. Explore our collection and find the
        best deals!
      </p>
      <div className="product-section">
        <Laptops />
      </div>
      <div className="product-section">
        <Phones />
      </div>
      <div className="product-section">
        <Vegetables />
      </div>
    </div>
  );
};

export default Home;
