import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Footer from './Footer';
import img from './Assets/inventory-management-system.jpg';
import img1 from './Assets/inventory-tracking.png';
import img2 from './Assets/generate-reports-with.png';
import img3 from './Assets/manage order.jpeg';

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <header className="navbar">
        <nav>
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#footer">Contact</a>
        </nav>
      </header>
      <div className="home">
        <header className="hero">
          <h1>Welcome to Our Inventory Management System</h1>
          <p>Manage your inventory efficiently and effectively with our system.</p>
          <button onClick={handleLogin} className="login-btn">Login</button>
        </header>
        <section id="about" className="about">
          <img src={img} alt="About us" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Our Inventory Management System is designed to help businesses track and manage their inventory with ease.
              From tracking stock levels to generating detailed reports and managing orders, our system provides all the
              tools you need to keep your business running smoothly.
            </p>
            <p>
              We prioritize security and reliability to ensure your data is always safe and accessible. Our user-friendly
              interface and comprehensive features make us a trustworthy partner for your business.
            </p>
          </div>
        </section>
        <section id="features" className="gallery">
          <h2>Features</h2>
          <div className="gallery-images">
            <div className="gallery-item">
              <img src={img1} alt="Track Inventory" />
              <p>Track Inventory</p>
            </div>
            <div className="gallery-item">
              <img src={img2} alt="Generate Reports" />
              <p>Generate Reports</p>
            </div>
            <div className="gallery-item">
              <img src={img3} alt="Manage Orders" />
              <p>Manage Orders</p>
            </div>
          </div>
        </section>
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
