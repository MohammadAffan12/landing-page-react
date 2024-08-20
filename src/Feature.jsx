import React from 'react';
 import image2 from './images/images (1).jpeg';
 import image4 from './images/images.jpeg';


function Feature() {
  return (
    <div id="featured">
      <h2>Featured Products</h2>
      <div className="product-card">
        <img src={image4} alt="Product 1" />
        <h3>Air Max 270</h3>
        <p>$150</p>
      </div>
      <div className="product-card">
        <img src={image2} alt="Product 2" />
        <h3>VaporMax Flyknit</h3>
        <p>$180</p>
      </div>
    </div>
  )
}

export default Feature