export default function SocialLinks({ className = "socials" }: { className?: string }) {
  return (
    <div className={className}>
      <a
        href="https://www.instagram.com/suprastudio__/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/company/suprastudio0/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.06 8.24h4.37v2.02h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.11h-4.56v-7.19c0-1.72-.03-3.93-2.39-3.93-2.4 0-2.77 1.87-2.77 3.8v7.32H8.06V8.24z" />
        </svg>
      </a>
      <a
        href="https://fr.pinterest.com/suprastudio_/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 5v14" />
          <path d="M8 5h5a4 4 0 0 1 0 8H8" />
        </svg>
      </a>
    </div>
  );
}
