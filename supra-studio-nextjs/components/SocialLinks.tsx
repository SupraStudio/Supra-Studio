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
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0a12 12 0 0 0-4.37 23.17c-.06-.98-.11-2.5.02-3.58.12-.94.8-6 .8-6s-.2-.4-.2-1c0-.94.55-1.65 1.23-1.65.58 0 .86.44.86.96 0 .58-.37 1.46-.56 2.27-.16.68.34 1.23 1 1.23 1.2 0 2.13-1.27 2.13-3.1 0-1.62-1.16-2.75-2.83-2.75-1.93 0-3.06 1.44-3.06 2.94 0 .58.22 1.2.5 1.54a.2.2 0 0 1 .05.19c-.05.22-.17.68-.2.78-.03.13-.1.16-.24.1-1.13-.53-1.83-2.17-1.83-3.5 0-2.85 2.07-5.47 5.97-5.47 3.13 0 5.57 2.23 5.57 5.2 0 3.1-1.96 5.6-4.67 5.6-.91 0-1.77-.47-2.06-1.03l-.56 2.14c-.2.78-.75 1.75-1.11 2.35A12 12 0 1 0 12 0z" />
        </svg>
      </a>
    </div>
  );
}
