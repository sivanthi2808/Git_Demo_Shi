import React from "react";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1>Developer Dashboard</h1>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>Users</h2>
          <p>150</p>
        </div>

        <div style={styles.card}>
          <h2>Projects</h2>
          <p>12</p>
        </div>

        <div style={styles.card}>
          <h2>Tasks</h2>
          <p>45</p>
        </div>

        <div style={styles.card}>
          <h2>Messages</h2>
          <p>8</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
 
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Dashboard;