import React from 'react';
import image1 from './images/change bg-removebg-preview (1).jpg';


const Content = () => {
  return (
    <div id="content">
      <div id="right">
        <h5>Explore the limited edition</h5>
        <h1>Nike Limited Edition</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sequi sint optio ipsam ratione corporis id labore nemo.</p>
        <button>Shop Now</button>
      </div>
      <div id="left">
        <div className="elem">
          <img src={image1} alt="Lebron Soldier 12" />
          <h4>Lebron Soldier 12 (Team)</h4>
          <h5>Men's Basketball Shoes</h5>
        </div>
      </div>
    </div>
  );
};

export default Content;
