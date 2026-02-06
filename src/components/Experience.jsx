export default function Experience() {
  return (
    <section>
      <h2>Experience</h2>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <div>
            <h3>Blackhawk Networks</h3>
            <p><strong>Software Engineer</strong></p>
            <p>Developed and maintained B2B incentives solutions platform handling enterprise-level gift card programs. Focused on delivering scalable reward management systems that drive customer loyalty and acquisition for corporate clients.</p>
            <p><strong>Tech Stack:</strong> Java, Spring Boot, Angular, React, Microservices, AWS</p>
          </div>
          <p style={{ whiteSpace: "nowrap", marginLeft: "20px" }}><strong>Present</strong></p>
        </div>
      </div>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <div>
            <h3>Jio Platforms Limited</h3>
            <p><strong>SDE</strong></p>
            <p>Worked on JIO-SecureID Project which deals with authentication (MFA) of user based on PKI Cryptography.</p>
            <p><strong>Tech Stack:</strong> Java, Spring Boot, Angular, MongoDB, Cryptography, Redis, MySQL, Git</p>
          </div>
          <p style={{ whiteSpace: "nowrap", marginLeft: "20px" }}><strong>2023 - 2024</strong></p>
        </div>
      </div>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <div>
            <h3>Subex Ltd</h3>
            <p><strong>Senior Software Engineer</strong></p>
            <p>Worked on Process Automation Project which deals with detecting frauds in tele communication networks.</p>
          </div>
          <p style={{ whiteSpace: "nowrap", marginLeft: "20px" }}><strong>2021 - 2023</strong></p>
        </div>
      </div>
    </section>
  );
}
