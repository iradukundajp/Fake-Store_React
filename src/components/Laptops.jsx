import "./Laptops.css";
import  { useState, useEffect } from "react";
import axios from "axios";


const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/laptops"
        );

        // Assuming the API response contains a "products" property with the laptop data
        if (response.data.products && Array.isArray(response.data.products)) {
          setLaptops(response.data.products);
          setLoading(false);
        } else {
          setError("Invalid API response format");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="laptops-container">
      <h2 className="laptops-heading">Laptops</h2>
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <div className="laptop-list">
          {laptops.map((laptop) => (
            <div className="laptop-card" key={laptop.id}>
              <img
                src={laptop.thumbnail}
                alt={laptop.title}
                className="laptop-image"
              />
              <h3 className="laptop-name">{laptop.title}</h3>
              <p className="laptop-price">Price: ${laptop.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Laptops;

