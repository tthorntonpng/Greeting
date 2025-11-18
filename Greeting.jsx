import React, { useState } from "react";

function Greeting() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={styles.container}>
      <h1
        style={{
          ...styles.title,
          ...(hovered ? styles.titleHover : {})
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Hello — I am your new Jr Web Developer
      </h1>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },

  // Metallic text effect
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #b8b8b8, #e2e2e2, #b8b8b8)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    transition: "0.3s ease",
    letterSpacing: "1px",
  },

  // Slight shine on hover
  titleHover: {
    background: "linear-gradient(90deg, #ffffff, #d6d6d6, #ffffff)",
    transform: "scale(1.03)",
  },
};

export default Greeting;
