import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroMobile from "./HomeMobile";
import logo from "../../images/logo.png";
import resumePDF from "../../documents/Gokulraj.pdf";
import chan from "../../images/gokul.jpg";
import Project from "../Project/ProjectDesktop";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Icons from "../Icons";
import Footer from "../Footer/Footer";
import Experience from "../Experience/ExperienceDesktop";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = resumePDF;
        link.download = "Gokul_Raj_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (isMobile) {
        return <HeroMobile />;
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    background: "linear-gradient(135deg, #000000, #333333, #666666, #999999, #CCCCCC)",
                    padding: "50px 20px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Logo, Title, and Navbar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        paddingLeft: "50px",
                        paddingRight: "50px",
                    }}
                >
                    {/* Logo and Title */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ display: "flex", alignItems: "center", gap: "10px" }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                        />
                        <h1
                            style={{
                                fontSize: "40px",
                                fontWeight: "bold",
                                color: "#fff",
                                margin: 0,
                            }}
                        >
                            Gokul Raj
                        </h1>
                    </motion.div>

                    {/* Navbar */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                            display: "flex",
                            gap: "20px",
                            whiteSpace: "nowrap", // Prevent wrapping
                        }}
                    >
                        {[
                            { name: "Home", ref: homeRef },
                            {name: "Experience", ref: experienceRef},
                            { name: "Project", ref: projectRef },
                            { name: "Skills", ref: skillsRef },
                            { name: "Contact", ref: contactRef },
                        ].map((item, index) => (
                            <motion.a
                                key={index} // Ensure unique key
                                onClick={() => handleScroll(item.ref)}
                                style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                    fontSize: "18px",
                                    position: "relative",
                                    cursor: "pointer",
                                    paddingLeft: "60px",
                                }}
                                whileHover={{ scale: 1.1, color: "#FFD700" }} // Gold hover effect
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Main Content */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: "1200px",
                        paddingLeft: "145px",
                    }}
                >
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{ maxWidth: "600px", textAlign: "left" }}
                    >
                        <h2 style={{ fontSize: "40px", fontWeight: "bold", color: "#fff" }}>
                            Showcasing My Expertise in Full-Stack Development & Cybersecurity
                        </h2>
                        <p style={{ marginTop: "15px", fontSize: "14px", color: "#fff" }}>
                            I am Gokul Raj, a passionate <b>Cybersecurity Enthusiast</b> and <b>Full-Stack Developer</b> dedicated to building secure and scalable web solutions.
                            With expertise in <b>JavaScript, React, Node.js, and Express.js</b>, I specialize in crafting dynamic applications while implementing robust security practices.
                            My goal is to bridge the gap between development and cybersecurity, ensuring digital products are not only high-performing but also well-protected.
                            Let's build something amazing together!
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                            <motion.button
                                onClick={handleResumeDownload}
                                style={{
                                    padding: "12px 10px",
                                    background: "black",
                                    border: "none",
                                    borderRadius: "30px",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "#fff",
                                    cursor: "pointer",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    marginRight: "420px"
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Resume Download
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Image with Animation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "20px",
                            background: "#fff",
                            borderRadius: "25px",
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                            width: "fit-content",
                            overflow: "hidden",
                        }}
                    >
                        <motion.img
                            src={chan}
                            alt="Illustration"
                            style={{
                                width: "400px",
                                height: "500px",
                                borderRadius: "20px",
                                objectFit: "cover",
                                transition: "transform 0.3s ease-in-out",
                            }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </motion.div>
                </div>
            </motion.div>
            <Icons />
            <div ref={experienceRef}><Experience /></div>
            <div ref={projectRef}><Project /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
        </div>
    );
};

export default Hero;
