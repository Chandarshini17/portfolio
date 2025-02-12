import React from "react";
import logo from "../../images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const styles = {
    footerTop: {
      background: "#fff",
      padding: "20px 10px",
      textAlign: "center",
      color: "#333",
      fontFamily: "'Times New Roman', serif",
    },
    footerQuote: {
      fontSize: "18px",
      fontWeight: "bold",
      margin: 0,
    },
    footerBottom: {
      background: "linear-gradient(to right, rgb(56, 58, 58), #A9A9A9)",
      padding: "30px 100px 15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#fff",
      fontFamily: "'Times New Roman', serif",
      flexWrap: "wrap",
    },
    socialIcons: {
      display: "flex",
      gap: "15px",
    },
    icon: {
      color: "#fff",
      fontSize: "24px",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    footerRights: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    logo: {
      width: "40px",
      height: "40px",
      borderRadius: "50%", // Makes it a circle
      objectFit: "cover",  // Ensures the image fills the circular shape properly
    },
    connect: {
      fontSize: "14px",
      textAlign: "center",
      marginTop: "10px",
      fontStyle: "italic",
    },
  };

  return (
    <>
      <div style={styles.footerTop}>
        <p style={styles.footerQuote}>
          “Turning ideas into reality – One line of code at a time.”
        </p>
      </div>
      <footer style={styles.footerBottom}>
        {/* Left side: Social Media Icons */}
        <div>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon} aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" style={styles.icon} aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" style={styles.icon} aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={styles.icon} aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" style={styles.icon} aria-label="Portfolio">
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <p style={styles.connect}>Let's connect and build something amazing together!</p>
        </div>

        {/* Right side: "© Gokul Raj.S Portfolio" and Logo */}
        <div style={styles.footerRights}>
          <span>© 2025 All rights reserved</span>
          <img
            src={logo}
            alt="Portfolio Logo"
            style={styles.logo}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
