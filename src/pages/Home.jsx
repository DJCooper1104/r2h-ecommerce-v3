import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoSection from "../components/VideoSection"; // Import the VideoSection component
import "./Home.css"; // Import CSS for styling the Home component

// Import images for the slider
import watchImage from "../assets/watch-1.png";
import ringImage from "../assets/ring-1.jpeg";
import necklaceImage from "../assets/necklace1.jpg";

const Home = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  // State to keep track of the current slide in the slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for the slider, including images, titles, and categories
  const slides = [
    { image: watchImage, title: "Luxury Watch", category: "watches" },
    { image: ringImage, title: "Elegant Ring", category: "rings" },
    {
      image: necklaceImage,
      title: "Beautiful Necklace",
      category: "necklaces",
    },
  ];

  // Function to navigate to the products page, optionally filtering by category
  const handleViewProductsClick = (category) => {
    navigate(`/products?category=${category}`); // Append category as a query parameter
  };

  // Function to navigate to the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop back to the first slide after the last slide
  };

  // Function to navigate to the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    ); // Loop back to the last slide when on the first slide
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        {/* Include the video section */}
        <VideoSection />
        <div className="hero-overlay">
          {/* Main heading and description */}
          <h1>Welcome to Darrell's Jewelry Store</h1>
          <p>Discover our luxurious and classy jewelry collection.</p>
          {/* Button to view all products */}
          <button
            className="cta-button"
            onClick={() => handleViewProductsClick("")} // Navigate without a specific category
          >
            View All Products
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <section className="slider-section">
        <h2>Featured Products</h2>
        <div className="slider">
          {/* Button to navigate to the previous slide */}
          <button className="prev-button" onClick={handlePrevSlide}>
            &#10094; {/* Left arrow symbol */}
          </button>
          <div
            className="slide"
            onClick={
              () => handleViewProductsClick(slides[currentSlide].category) // Navigate to the product category of the current slide
            }
          >
            {/* Display the current slide's image and title */}
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="slider-image"
            />
            <p>{slides[currentSlide].title}</p>
          </div>
          {/* Button to navigate to the next slide */}
          <button className="next-button" onClick={handleNextSlide}>
            &#10095; {/* Right arrow symbol */}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
