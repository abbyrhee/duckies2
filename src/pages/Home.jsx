import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">duckies</h1>
        <p className="tagline">find your perfect duck.</p>
        <Link to="/shop">
          <button className="shop-button">shop now</button>
        </Link>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="arrival-cards">
          <div className="card">Item 1</div>
          <div className="card">Item 2</div>
          <div className="card">Item 3</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
