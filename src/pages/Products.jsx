import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import Footer from "../components/Footer"; // Import Footer component
import "../App.css"; // Import global CSS file

// Define the Products component
export default function Products() {
  const [data, setData] = useState([]); // State to store the full list of products fetched from the API
  const [filteredData, setFilteredData] = useState([]); // State to store the filtered list of products based on the selected category
  const [selectedCategory, setSelectedCategory] = useState("all"); // State to store the currently selected category filter

  // useEffect to fetch product data from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:8081/jewelry") // Replace with your API URL
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setData(data); // Store the fetched data in the state
        setFilteredData(data); // Initialize the filtered data to display all products
      })
      .catch((err) => console.error("Error fetching data:", err)); // Handle errors
  }, []); // Empty dependency array ensures this runs only once, on mount

  // Function to handle changes in the selected category filter
  const handleFilterChange = (category) => {
    setSelectedCategory(category); // Update the selected category state
    if (category === "all") {
      setFilteredData(data); // If "all" is selected, show all products
    } else {
      setFilteredData(
        data.filter((item) => item.category.toLowerCase() === category) // Filter products by category
      );
    }
  };

  return (
    <div>
      {/* Render the Navbar at the top */}
      <Navbar />
      <main className="products-page">
        <h1 className="page-title">Our Products</h1>

        {/* Filter Buttons Section */}
        <div className="filter-buttons">
          {/* Button to show all products */}
          <button
            className={`filter-button ${
              selectedCategory === "all" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          {/* Button to filter by "Watches" category */}
          <button
            className={`filter-button ${
              selectedCategory === "watches" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("watches")}
          >
            Watches
          </button>
          {/* Button to filter by "Rings" category */}
          <button
            className={`filter-button ${
              selectedCategory === "rings" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("rings")}
          >
            Rings
          </button>
          {/* Button to filter by "Necklaces" category */}
          <button
            className={`filter-button ${
              selectedCategory === "necklaces" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("necklaces")}
          >
            Necklaces
          </button>
        </div>

        {/* Product Cards Section */}
        <div className="product-cards-container">
          {filteredData.length > 0 ? (
            // Map through the filteredData array to render product cards
            filteredData.map((product, i) => (
              <div className="product-card" key={i}>
                <img
                  src={product.image} // Product image
                  alt={product.name} // Alternative text for accessibility
                  className="product-image"
                />
                <div className="product-details">
                  <h3>{product.name}</h3> {/* Product name */}
                  <p>{product.description}</p> {/* Product description */}
                  <p className="product-price">{product.price}</p>{" "}
                  {/* Product price */}
                </div>
              </div>
            ))
          ) : (
            // Message to display if no products match the selected category
            <p className="no-products-message">
              No products found for this category.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
