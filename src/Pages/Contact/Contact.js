import React, { useState, useEffect } from "react";
import MobileContactMePage from "./ContactMobile";

const ContactMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/xzzdvrly", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    } else {
      setStatus("Failed to send. Try again.");
    }
  };

  return isMobile ? (
    <MobileContactMePage
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      status={status}
    />
  ) : (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Me</h1>
        <p style={styles.subtitle}>
        Let’s connect! Whether you have an exciting project, want to collaborate, or just want to say hi—I’d love to hear from you!
        </p>
      </header>
      {/* Main Section */}
      <section style={styles.mainSection}>
        {/* Left Side Content */}
        <div style={styles.leftContent}>
          <h2 style={styles.projectHeader}>Let's Work Together</h2>
          <p style={styles.paragraph}>
            Have a question or just want to chat? Drop me a message, and I'll get back to you as soon as possible!
          </p>
        </div>

        {/* Right Side Form */}
        <div style={styles.formContainer}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  style={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div style={styles.underline}></div>
              </div>
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  style={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div style={styles.underline}></div>
              </div>
            </div>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  style={styles.input}
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div style={styles.underline}></div>
              </div>
              <div style={styles.inputGroup}>
                <select
                  name="country"
                  style={styles.input}
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select Your Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="India">India</option>
                </select>
                <div style={styles.underline}></div>
              </div>
            </div>
            <div style={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                style={{ ...styles.input, ...styles.textarea }}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div style={styles.underline}></div>
            </div>
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
            {status && <p style={styles.statusMessage}>{status}</p>}
          </form>
        </div>
      </section>
      <style>
        {`
    input::placeholder, textarea::placeholder {
      color: white !important;
      opacity: 1;
    }
  `}
      </style>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
  },
  mainSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    background: "linear-gradient(135deg, #000000, #333333, #666666, #999999, #CCCCCC)",
    color: "#fff",
  },
  leftContent: {
    flex: 1,
    textAlign: "left",
    padding: "20px",
  },
  projectHeader: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    margin: "10px 0",
  },
  formContainer: {
    flex: 1,
    textAlign: "left",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  inputGroup: {
    flex: 1,
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    outline: "none",
    zIndex: 1,
     "::placeholder": {
      color: "black", // Changes the placeholder text color to black
      opacity: 1, // Ensures visibility in some browsers
    },
  },
  underline: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#fff",
    zIndex: 0,
  },
  textarea: {
    resize: "none",
    height: "60px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "black",
    border: "none",
    fontSize: "16px",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    width: "160px",
    alignSelf: "flex-start",
    
  },
  statusMessage: {
    marginTop: "10px",
    fontSize: "16px",
    color: "black",
  },
};

export default ContactMePage;
