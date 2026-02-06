export default function Education() {
  return (
    <section>
      <h2>Education</h2>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <div>
            <p><strong>UG Education (B.E)</strong></p>
            <p>Dr Ambedkar Institute of Technology</p>
            <p>CGPA: 9.10</p>
          </div>
          <p style={{ whiteSpace: "nowrap", marginLeft: "20px" }}><strong>2017 - 2021</strong></p>
        </div>
      </div>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <div>
            <p><strong>XIIth Education</strong></p>
            <p>Narayana PU College</p>
            <p>Percentage: 85%</p>
          </div>
          <p style={{ whiteSpace: "nowrap", marginLeft: "20px" }}><strong>2015 - 2017</strong></p>
        </div>
      </div>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <div>
            <p><strong>Xth Education</strong></p>
            <p>Widia Poorna Prajna School</p>
            <p>Percentage: 93.12%</p>
          </div>
          <p style={{ whiteSpace: "nowrap", marginLeft: "20px" }}><strong>2015</strong></p>
        </div>
      </div>
    </section>
  );
}
