import React from 'react';

interface LogoProps {
  /** Renders the wordmark in navy instead of white, for use on light backgrounds. */
  dark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ dark = false }) => (
  <span className="flex items-center gap-2.5">
    {/* Broadcast signal: a source dot with two arcs radiating out on each side */}
    <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" aria-hidden="true">
      <g
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="2.6"
        strokeLinecap="round"
      >
        <circle cx="20" cy="20" r="3.4" fill="var(--color-brand)" stroke="none" />
        <path d="M13.6 13.6a9 9 0 0 0 0 12.8" />
        <path d="M26.4 13.6a9 9 0 0 1 0 12.8" />
        <path d="M8.6 8.6a16 16 0 0 0 0 22.8" opacity="0.55" />
        <path d="M31.4 8.6a16 16 0 0 1 0 22.8" opacity="0.55" />
      </g>
    </svg>
    <span className={`text-2xl font-bold tracking-tight ${dark ? 'text-navy' : 'text-white'}`}>
      NeroIPTV
    </span>
  </span>
);
