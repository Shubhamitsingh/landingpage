import React from 'react'
import './App.css'

function App() {
  const playStoreLink = "https://play.google.com/store/apps/details?id=your.app.id" // Replace with your actual Play Store link
  const privacyPolicyLink = "#privacy-policy" // Replace with your actual privacy policy link
  const contactEmail = "contact@yourapp.com" // Replace with your actual contact email

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <img 
                src="/pinklogo.png" 
                alt="App Logo" 
                className="logo"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="logo-placeholder" style={{display: 'none'}}>
                <span>📱</span>
              </div>
            </div>
            <h1 className="app-name">Chamakz</h1>
            <div className="header-spacer"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-container">
              <img 
                src="/app-screenshot.jpeg" 
                alt="App Screenshot" 
                className="hero-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <span>📱</span>
                <p>App Screenshot</p>
              </div>
              <div className="hero-text-overlay">
                <h2 className="headline">Hot Videos & Live Shows</h2>
                <p className="description">
                  Watch amazing live streams, connect with creators, and enjoy exclusive content. Join thousands of users streaming live now!
                </p>
              </div>
            </div>
          <div className="download-overlay">
            <a 
              href={playStoreLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-button"
            >
              Download Now
            </a>
            <div className="download-text-container">
              <img 
                src="/playstore.png" 
                alt="Google Play" 
                className="google-play-logo"
              />
              <p className="download-text">Available on Google Play</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a href={privacyPolicyLink} className="footer-link">Privacy Policy</a>
            <span className="footer-separator">•</span>
            <a href={`mailto:${contactEmail}`} className="footer-link">Contact Us</a>
          </div>
          <p className="footer-copyright">© 2024 Chamakz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
