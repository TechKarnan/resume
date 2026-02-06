import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: "50px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: "280px" }}>
        <h1 style={{ fontSize: "2.2rem", margin: 0, color: "#fff"}}>
          Preetham M.N
        </h1>

        <h3 style={{ marginTop: "8px", fontWeight: 600 }}>
          Software Engineer | Java Full Stack Developer
        </h3>

        <p style={{ maxWidth: "600px", marginTop: "12px", color: "#94a3b8", lineHeight: 1.6 }}>
          Building scalable, production-ready web applications using Java and modern frontend frameworks. Focused on clean code, reliable systems, and collaborative delivery.
        </p>

        <div style={{ marginTop: "18px", display: "flex", gap: "12px", alignItems: "center" }}>
          <a
            href="#contact"
            className="btn"
            style={{ padding: "8px 14px", borderRadius: 6, background: "#2563eb", color: "#fff", textDecoration: "none", display: "inline-block" }}
          >
            Contact
          </a>

          <a
            href="https://www.linkedin.com/in/preetham-m-n-a90030212/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "8px 14px", borderRadius: 6, border: "1px solid #cbd5e1", background: "#f8fafc", color: "#0b1220", textDecoration: "none", display: "inline-block" }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      <img
        src={profile}
        alt="Preetham M.N"
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #fff",
        }}
      />
    </section>
  );
}
