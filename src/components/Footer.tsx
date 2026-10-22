export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-text">Shubham Bhatia · IIT Mandi · {new Date().getFullYear()}</p>
        <p className="footer-text">Built with React + Vite + TypeScript</p>
      </div>
    </footer>
  );
}
