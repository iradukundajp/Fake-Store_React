import { useState, useEffect } from "react";
import axios from "axios";
import "./Phones.css"; // Import your CSS file

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/smartphones"
        );

        // Assuming the API response contains a "products" property with the phone data
        if (response.data.products && Array.isArray(response.data.products)) {
          setPhones(response.data.products);
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
    <div className="phones-container">
      <h2 className="phones-heading">Smartphones</h2>
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <div className="phone-list">
          {phones.map((phone) => (
            <div className="phone-card" key={phone.id}>
              <img
                src={phone.thumbnail}
                alt={phone.title}
                className="phone-image"
              />
              <h3 className="phone-name">{phone.title}</h3>
              <p className="phone-price">Price: ${phone.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Phones;
