import React from "react";
import Instagram from "../images/instagram.png";
import Github from "../images/github.png";
import linkedin from "../images/linked.png";
import gmail from "../images/gmail.jpg";
import phone from "../images/phone.png";

const Icons = () => {
  const iconData = [
    { url: "https://www.instagram.com/yourusername", img: Instagram },
    { url: "https://github.com/yourusername", img: Github },
    { url: "https://www.linkedin.com/in/yourusername", img: linkedin },
    { url: "mailto:your.email@example.com", img: gmail },
    { url: "tel:+1234567890", img: phone }, // Click to call
  ];

  const containerStyle = {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px 0",
    position: "relative",
  };

  const iconStyle = {
    width: "50px",
    height: "50px",
    margin: "0 20px",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  const renderIcons = () => {
    const totalIcons = Math.ceil(window.innerWidth / (70 + 20)) * 2; // Adjust for icon width + margin
    const extendedIcons = Array(totalIcons)
      .fill(iconData)
      .flat();

    return extendedIcons.map((icon, index) => (
      <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
        <img src={icon.img} alt={`Icon ${index}`} style={iconStyle} />
      </a>
    ));
  };

  return (
    <div style={containerStyle}>
      {/* Inject the keyframes into the style */}
      <style>{keyframes}</style>
      <div
        style={{
          display: "flex",
          animation: "scroll 10s linear infinite",
          width: `${iconData.length * 2 * (70 + 20)}px`, // Adjust for icon width + margin
        }}
      >
        {renderIcons()}
      </div>
    </div>
  );
};

export default Icons;
