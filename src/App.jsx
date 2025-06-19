import { useState } from 'react'
import './App.css'

const images = ['/main.jpg', '/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg']

function App() {
  const [index, setIndex] = useState(0)

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className='logoimgimg'><img src="/logo.svg" alt="Logo" className="footer-logo" /></div>
          <nav className="text-sm font-medium text-gray-600 header-nav">
            <a href="#home" className="hover:text-black">Home</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      {/* Intro - Carousel */}
      <section id="home" className="hero-section">
        <img src={images[index]} className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h2 className="hero-title">-Lorem ipsum<br />dolor sit amet,</h2>
            <p className="hero-description">
              -Lorem ipsum dolor sit amet, consectetur<br />
              sed do eiusmod tempor incididunt ut<br />
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
          className="hero-nav-button hero-nav-left"
        >
          ‹
        </button>
        <button 
          onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
          className="hero-nav-button hero-nav-right"
        >
          ›
        </button>
      </section>

      {/* Card Section */}
      <section className="card-section">
        <div className="card-container">
          <div className="card">
            <img src="/img1.jpg" alt="Card 1" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Lorem ipsum<br />dolor sit amet,</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit,
              </p>
              <button className="card-button">
                Learn more dolor sit amet →
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img2.jpg" alt="Card 2" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Lorem ipsum<br />dolor sit amet,</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit,
              </p>
              <button className="card-button">
                Learn more dolor sit amet →
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img3.jpg" alt="Card 3" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Lorem ipsum<br />dolor sit amet,</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit,
              </p>
              <button className="card-button">
                Learn more dolor sit amet →
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img4.jpg" alt="Card 4" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Lorem ipsum<br />dolor sit amet,</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit,
              </p>
              <button className="card-button">
                Learn more dolor sit amet →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Section */}
      <section className="empty-section">
        <div> </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img src="/logo2.svg" alt="Logo2" className="footer-logo" />
          <p className="footer-text">Copyrights 2025 테스트 All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
