function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>

      {/* Hero */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #4f46e5, #6366f1)",
        color: "white"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>Sammunat</h1>
        <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
          Smart Digital Solutions for Modern Businesses
        </p>
        <button style={{
          marginTop: "30px",
          padding: "12px 28px",
          fontSize: "16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Get Started
        </button>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Features</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}>
          {["Fast Development", "Scalable Architecture", "Modern UI"].map(item => (
            <div key={item} style={{
              padding: "20px",
              width: "220px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{
        padding: "80px 20px",
        background: "#f9fafb",
        textAlign: "center"
      }}>
        <h2>About Sammunat</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Sammunat helps startups and enterprises build reliable, scalable,
          and modern digital products using the latest web technologies.
        </p>
      </section>

      {/* Contact */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <input
          placeholder="Your Email"
          style={{
            padding: "10px",
            width: "260px",
            marginTop: "20px",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
        />
        <br />
        <button style={{
          marginTop: "20px",
          padding: "10px 24px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
          Submit
        </button>
      </section>

    </div>
  );
}

export default App;
