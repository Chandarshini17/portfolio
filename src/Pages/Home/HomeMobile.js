import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";
import resumePDF from "../../documents/Gokulraj.pdf";
import chan from "../../images/gokul.jpg";
import Project from "../Project/ProjectDesktop";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Icons from "../Icons";
import Footer from "../Footer/Footer";
import Experience from "../Experience/ExperienceDesktop";

const HeroMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const experienceRef = useRef(null);

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
            setMenuOpen(false); // Close menu after clicking
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

    return (
        <div>
            <div
                style={{
                    background: "linear-gradient(rgb(56, 58, 58), #A9A9A9)",
                    padding: "30px 15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                {/* Logo and Navbar */}
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={logo} alt="Lexiontech Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#fff", margin: 0 }}>Gokul Raj</h1>
                    </div>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", fontSize: "24px" }}
                    >
                        {!menuOpen && <FaBars />}
                    </button>
                </div>

                {/* Sidebar Menu */}
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        right: menuOpen ? "0" : "-250px", // Moves in and out
                        width: "250px",
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "20px 0",
                        gap: "15px",
                        transition: "right 0.3s ease-in-out", // Smooth slide-in effect
                        zIndex: "1000",
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        style={{
                            background: "transparent",
                            border: "none",
                            color: "#fff",
                            fontSize: "20px",
                            cursor: "pointer",
                            alignSelf: "flex-end",
                            marginRight: "15px",
                        }}
                    >
                        ✖
                    </button>

                    <a onClick={() => handleScroll(homeRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer"  }}>Home</a>
                    <a onClick={() => handleScroll(experienceRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer"  }}>Experience</a>
                    <a onClick={() => handleScroll(projectRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer"  }}>Project</a>
                    <a onClick={() => handleScroll(skillsRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer"  }}>Skills</a>
                    <a onClick={() => handleScroll(contactRef)} style={{ textDecoration: "none", color: "#fff", fontSize: "16px", cursor: "pointer"  }}>Contact</a>
                </div>

                {/* Profile Image */}
                <div style={{ marginTop: "20px" }}>
                    <img src={chan} alt="Illustration" style={{  width: "90%",
        maxWidth: "400px",
        borderRadius: "50px",
        height: "auto" }} />
                </div>

                {/* Main Content */}
                <div style={{ maxWidth: "90%" }}>
                    <h4 style={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}>WELCOME</h4>
                    <h2 style={{ fontSize: "30px", fontWeight: "bold", color: "#fff" }}>
                        Build Your Digital Presence with Cutting-Edge Website Development
                    </h2>
                    <p style={{ marginTop: "15px", fontSize: "14px", color: "#fff" }}>
                        I am Gokul Raj, a passionate <b>Cybersecurity Enthusiast</b> and <b>Full-Stack Developer</b> dedicated to building secure and scalable web solutions.
                        With expertise in <b>JavaScript, React, Node.js, and Express.js</b>, I specialize in crafting dynamic applications while implementing robust security practices.
                        My goal is to bridge the gap between development and cybersecurity, ensuring digital products are not only high-performing but also well-protected.
                        Let's build something amazing together!
                    </p>
                    <button
                        onClick={handleResumeDownload}
                        style={{
                            marginTop: "20px",
                            padding: "12px 30px",
                            background: "black",
                            border: "none",
                            borderRadius: "30px",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#fff",
                            cursor: "pointer",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                            e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        Resume Download
                    </button>
                </div>
            </div>
            <Icons />
            <Experience />
            <div ref={projectRef}><Project /></div>
            <div ref={skillsRef}><Skills /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
        </div>
    );
};

export default HeroMobile;
