import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaPython, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiRedux, SiDocker, SiTailwindcss, SiGit } from "react-icons/si";

const styles = {
  section: {
    padding: "60px 20px",
    textAlign: "center",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  categoryTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#4a5568",
    marginBottom: "20px",
  },
  skillText: {
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#2d3748",
  },
};

const skills = [
  {
    category: "Development",
    items: [
      { name: "React", icon: <FaReact style={{ color: "#61dafb" }} /> },
      { name: "Node.js", icon: <FaNodeJs style={{ color: "#68a063" }} /> },
      { name: "Python", icon: <FaPython style={{ color: "#f7cb4d" }} /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb style={{ color: "#4db33d" }} /> },
      { name: "SQL", icon: <FaDatabase style={{ color: "#6c757d" }} /> },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "AWS", icon: <FaAws style={{ color: "#ff9900" }} /> },
      { name: "Docker", icon: <SiDocker style={{ color: "#2496ed" }} /> },
      { name: "Git", icon: <SiGit style={{ color: "#f1502f" }} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section style={styles.section}>
      <motion.div 
        style={styles.container} 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 style={styles.title}>Skills & Technologies</h2>
        <div style={styles.grid}>
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              style={{
                background: "#ffffff",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={styles.categoryTitle}>{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {skillCategory.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "15px",
                      borderRadius: "10px",
                      background: "#f7fafc",
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.05)",
                      cursor: "pointer",
                    }}
                    whileHover={{ scale: 1.1, background: "#edf2f7" }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <span style={{ fontSize: "2rem", marginBottom: "10px" }}>{skill.icon}</span>
                    <span style={styles.skillText}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
