export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <span>© {new Date().getFullYear()} Supra Studio — Tous droits réservés</span>
        <div className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-confidentialite">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
