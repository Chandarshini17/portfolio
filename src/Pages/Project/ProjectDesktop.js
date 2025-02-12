import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroMobile from "./ProjectMobile";
import blog from "../../images/blog.jpg";
import todo from "../../images/todo.jpg";
import water from "../../images/water.png";
import ecom from "../../images/e-com.jpg";
import conf from "../../images/conf.jpg";

const Project = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return <HeroMobile />;
    }

    const services = [
        {
            id: 1,
            title: "Blog App",
            description: "A full-featured blog app for creating, managing, and sharing posts with a user-friendly interface.",
            image: blog,
            background: "linear-gradient(#74EBD580, #ACB6E580)",
            liveDemo: "#",
            gitHub: "#"
        },
        {
            id: 2,
            title: "Todo List",
            description: "A simple and intuitive to-do list app for managing tasks efficiently.",
            image: todo,
            background: "linear-gradient(#E59A4980, #51AFB780)",
            liveDemo: "#",
            gitHub: "#"
        },
        {
            id: 3,
            title: "Automated water sorting Machine",
            description: "An automated system for efficiently sorting and distributing water based on predefined criteria.",
            image: water,
            background: "linear-gradient(#5F307480, #3F5B8380)",
            liveDemo: "#",
            gitHub: "#"
        },
        {
            id: 4,
            title: "E-commerce Website",
            description: "A dynamic e-commerce website for seamless product browsing, purchasing, and order management.",
            image: ecom,
            background: "linear-gradient(#5F307480, #3F5B8380)",
            liveDemo: "#",
            gitHub: "#"
        },
        {
            id: 5,
            title: "Conference Application",
            description: "A comprehensive conference application website for event scheduling, speaker management. ",
            image: conf,
            background: "linear-gradient(#5F307480, #3F5B8380)",
            liveDemo: "https://iasigt1.netlify.app/",
            gitHub: "#"
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
    };

    return (
        <motion.div
            style={styles.container}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                style={styles.heading}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                PROJECT
            </motion.h1>
            <motion.p
                style={styles.description}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                As a full-stack developer passionate about building robust applications, I work closely with clients to
                transform their ideas into efficient, scalable solutions.
            </motion.p>
            <Slider {...sliderSettings} style={styles.slider}>
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        style={{ ...styles.card, background: service.background }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 4, delay: index * 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.img
                            src={service.image}
                            alt={service.title}
                            style={styles.image}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 4 }}
                        />
                        <div style={styles.textContainer}>
                            <h3 style={styles.cardHeading}>{service.title}</h3>
                            <p style={styles.cardDescription}>{service.description}</p>
                            <div style={styles.buttonContainer}>
                                <motion.button
                                    style={styles.button}
                                    whileHover={{ scale: 1.1, backgroundColor: "#555" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(service.gitHub, "_blank")}
                                >
                                    GitHub
                                </motion.button>
                                <motion.button
                                    style={styles.button}
                                    whileHover={{ scale: 1.1, backgroundColor: "#555" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(service.liveDemo, "_blank")}
                                >
                                    Live Demo
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </motion.div>
    );
};

const styles = {
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "50px 20px",
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
    },
    heading: {
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#333",
    },
    description: {
        fontSize: "18px",
        color: "#666",
        marginBottom: "40px",
        lineHeight: "1.6",
    },
    slider: {
        padding: "0 20px",
    },
    card: {
        borderRadius: "20px",
        padding: "20px",
        maxWidth: "300px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
        color: "#333",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    image: {
        width: "200px",
        height: "200px",
        marginBottom: "20px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    textContainer: {
        backgroundColor: "#FFFFFF80",
        borderRadius: "0 0 50px 0",
        padding: "15px",
        width: "90%",
        height: "180px",
        marginTop: "-10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    cardHeading: {
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "10px",
        color: "#333",
    },
    cardDescription: {
        fontSize: "14px",
        color: "#555",
        lineHeight: "1.6",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "15px",
    },
    button: {
        padding: "8px 12px",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#fff",
        background: "#333",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.3s",
    },
};

export default Project;
