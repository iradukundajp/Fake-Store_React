import { useState, useEffect } from "react";
import axios from "axios";
import "./Vegetables.css"; 

const Vegetables = () => {
  const [vegetables, setVegetables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/groceries"
        );

        if (Array.isArray(response.data.products)) {
          setVegetables(response.data.products);
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
    <div className="vegetables-container">
      <h2 className="vegetables-heading">Vegetables</h2>
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <div className="vegetables-list">
          {vegetables.map((vegetable) => (
            <div className="vegetable-card" key={vegetable.id}>
              <div className="vegetable-image-container">
                <img
                  src={vegetable.thumbnail}
                  alt={vegetable.title}
                  className="vegetable-image"
                />
              </div>
              <h3 className="vegetable-name">{vegetable.title}</h3>
              <p className="vegetable-price">Price: ${vegetable.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vegetables;
