import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaBook, FaProjectDiagram, FaLaptopCode, FaDatabase, FaMicrochip, FaComments, FaRocket, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import { SiMongodb, SiMysql, SiJavascript, SiHtml5, SiCss3, SiPycharm, SiPostman, SiSelenium, SiThunderbird } from "react-icons/si";

const styles = {
  section: {
    padding: "40px 15px",
    textAlign: "center",
    background: "#fff",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "25px",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  tab: {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "500",
    background: "#f0f0f0",
    border: "none",
  },
  activeTab: {
    background: "#007bff",
    color: "#fff",
  },
  skillsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
  skillBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "120px",
  },
  iconStyle: {
    fontSize: "2rem",
    marginBottom: "8px",
  },
  skillText: {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#222",
  },
};

const categories = {
  "Frontend": [
    { name: "HTML", icon: <SiHtml5 style={{ color: "#e34c26" }} /> },
    { name: "CSS", icon: <SiCss3 style={{ color: "#1572b6" }} /> },
    { name: "JavaScript", icon: <SiJavascript style={{ color: "#f7df1e" }} /> },
    { name: "React JS", icon: <FaReact style={{ color: "#61dafb" }} /> },
  ],
  "Backend": [
    { name: "Node JS", icon: <FaNodeJs style={{ color: "#68a063" }} /> },
    { name: "MongoDB", icon: <SiMongodb style={{ color: "#4db33d" }} /> },
    { name: "MySQL", icon: <SiMysql style={{ color: "#4479a1" }} /> },
  ],
  "Tools": [
    { name: "Github", icon: <FaReact style={{ color: "#333" }} /> },
    { 
      name: "VS Code", 
      icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebRBzJhW1BDg-1D9keKRb3e0GXVBUBI1ORA&s" 
                alt="VS Code" 
                style={{ width: "20px", height: "20px", marginBottom: "8px" }} /> 
    },
    { name: "PyCharm", icon: <SiPycharm style={{ color: "#21D789" }} /> },
  ],
  "Other Concepts": [
    { name: "Python", icon: <FaPython style={{ color: "#306998" }} /> },
    { name: "OOPS", icon: <FaBook style={{ color: "#6a1b9a" }} /> },
    { name: "DSA", icon: <FaProjectDiagram style={{ color: "#ff9800" }} /> },
    { name: "Software Engineering", icon: <FaLaptopCode style={{ color: "#0277bd" }} /> },
    { name: "DBMS", icon: <FaDatabase style={{ color: "#795548" }} /> },
    { name: "IoT", icon: <FaMicrochip style={{ color: "#ff5722" }} /> },
  ],
  "QA & Testing Tools": [
    { name: "Postman", icon: <SiPostman style={{ color: "#FF6C37" }} /> },
    { name: "Selenium", icon: <SiSelenium style={{ color: "#43B02A" }} /> },
    { name: "Thunder Client", icon: <SiThunderbird style={{ color: "#005F99" }} /> },
  ],
  "Other Skills": [
    { name: "Communication", icon: <FaComments style={{ color: "#1976d2" }} /> },
    { name: "Quick Learning", icon: <FaRocket style={{ color: "#e53935" }} /> },
    { name: "Time Management", icon: <FaClock style={{ color: "#fbc02d" }} /> },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section style={styles.section}>
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 style={styles.title}>Skills & Technologies</h2>
        <div style={styles.tabContainer}>
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              style={{
                ...styles.tab,
                ...(activeTab === category ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div style={styles.skillsGrid}>
          {categories[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              style={styles.skillBox}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)" }}
            >
              {skill.icon && skill.icon}
              <div style={styles.skillText}>{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
