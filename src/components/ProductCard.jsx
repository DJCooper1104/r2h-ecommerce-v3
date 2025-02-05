import React from "react";
import "../App.css"; // Ensure styles are applied

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
}
