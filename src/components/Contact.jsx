export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact :</h2>

      <p>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 4h16v16H4z"/>
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <a href="mailto:preetham7080@gmail.com">preetham7080@gmail.com</a>
        </span>
      </p>

      <p>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.5 0-2 1-2 2v7h-4v-14h4v2" />
            <rect x="2" y="9" width="4" height="11" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <a href="https://www.linkedin.com/in/preetham-m-n-a90030212/" target="_blank" rel="noopener noreferrer">linkedin.com/in/PREETHAMMN</a>
        </span>
      </p>

      {/* <p>
        GitHub:{" "}
        <a href="https://github.com/YOUR_GITHUB" target="_blank">
          github.com/YOUR_GITHUB
        </a>
      </p> */}
    </section>
  );
}
