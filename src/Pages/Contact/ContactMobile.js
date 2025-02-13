import React from "react";

const MobileContactMePage = ({ formData, handleChange, handleSubmit, status }) => {
  return (
    <div style={mobileStyles.container}>
      <h2 style={mobileStyles.header}>Contact Me</h2>
      <p style={mobileStyles.subtext}>
        Let's connect! Have a project, idea, or just want to chat? Drop me a message!
      </p>
      <p style={mobileStyles.paragraph}>
        Have a question or just want to chat? Drop me a message, and I'll get back to you as soon as possible!
      </p>
      <form style={mobileStyles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={mobileStyles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={mobileStyles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number (Optional)"
          style={mobileStyles.input}
          value={formData.phone}
          onChange={handleChange}
        />
        <select
          name="country"
          style={mobileStyles.input}
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Your Country</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="India">India</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          style={mobileStyles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" style={mobileStyles.button}>Send</button>
        {status && <p style={mobileStyles.status}>{status}</p>}
      </form>
    </div>
  );
};

const mobileStyles = {
  container: {
    padding: "20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #000000, #333333, #666666, #999999, #CCCCCC)",
    color: "#fff",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  subtext: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    border: "none",
    borderBottom: "1px solid #fff",
    backgroundColor: "transparent",
    color: "#fff",
    outline: "none",
  },
  textarea: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #fff",
    backgroundColor: "transparent",
    color: "#fff",
    height: "80px",
  },
  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
},
  status: {
    marginTop: "10px",
    fontSize: "14px",
    color: "yellow",
  },
};

export default MobileContactMePage;
