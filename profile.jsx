function Profile() {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src="https://via.placeholder.com/120"
        alt="Profile"
        style={{
          borderRadius: "50%",
          marginBottom: "15px"
        }}
      />

      <h2>Rupika</h2>
      <p>Computer Science Engineering Student</p>

      <hr />

      <p><strong>Email:</strong> rupika@example.com</p>
      <p><strong>Phone:</strong> +91 9876543210</p>
      <p><strong>Location:</strong> Chennai, India</p>

      <button
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007BFF",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Edit Profile
      </button>
    </div>
  );
}

export default Profile;