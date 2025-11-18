import React, { useState } from "react";

/**
 * Greeting Component
 * ------------------
 * A simple interactive component that shows a metallic greeting.
 * Shows hover animation and a personal message.
 */

export default function Greeting() {
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1a1a1a",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #b8b8b8, #e2e2e2, #b8b8b8)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    transition: "all 0.3s ease",
    textAlign: "center",
    letterSpacing: "1px",
  },
  titleHover: {
    background: "linear-gradient(90deg, #ffffff, #d6d6d6, #ffffff)",
    transform: "scale(1.05)",
  },
};
