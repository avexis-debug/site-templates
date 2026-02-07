interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const icons: Record<string, (size: number, color: string) => JSX.Element> = {
  scissors: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  comb: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="4" height="18" rx="1" />
      <line x1="7" y1="6" x2="14" y2="6" />
      <line x1="7" y1="9" x2="14" y2="9" />
      <line x1="7" y1="12" x2="14" y2="12" />
      <line x1="7" y1="15" x2="14" y2="15" />
      <line x1="7" y1="18" x2="14" y2="18" />
    </svg>
  ),
  brush: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 114.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 00-3-3.02z" />
    </svg>
  ),
  hairdryer: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12c0-3.87-3.13-7-7-7H9l-2 3v8l2 3h6c3.87 0 7-3.13 7-7z" />
      <circle cx="16" cy="12" r="2" />
      <path d="M2 10h5" />
      <path d="M2 14h5" />
      <line x1="9" y1="16" x2="6" y2="22" />
    </svg>
  ),
  razor: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3h10v4a2 2 0 01-2 2H9a2 2 0 01-2-2V3z" />
      <line x1="12" y1="9" x2="12" y2="21" />
      <line x1="9" y1="3" x2="15" y2="3" />
    </svg>
  ),
  mirror: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="7" />
      <line x1="12" y1="17" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  ),
  spray: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="10" width="8" height="12" rx="1" />
      <path d="M10 10V7a2 2 0 012-2v0a2 2 0 012 2v3" />
      <line x1="12" y1="5" x2="12" y2="2" />
      <line x1="9" y1="3" x2="12" y2="2" />
      <line x1="15" y1="3" x2="12" y2="2" />
    </svg>
  ),
  shampoo: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2h6v4H9z" />
      <path d="M8 6h8l1 16H7L8 6z" />
      <line x1="12" y1="2" x2="12" y2="0" />
      <path d="M10 12c1 1 3 1 4 0" />
    </svg>
  ),
  beard: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10c0-4.42 3.58-8 8-8s8 3.58 8 8" />
      <path d="M4 10c0 3 1.5 5.5 4 7l4 4 4-4c2.5-1.5 4-4 4-7" />
      <line x1="9" y1="10" x2="9" y2="13" />
      <line x1="15" y1="10" x2="15" y2="13" />
    </svg>
  ),
  coloring: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 3H5a2 2 0 00-2 2v2h18V5a2 2 0 00-2-2z" />
      <path d="M3 7l2 14h14l2-14" />
      <path d="M8 7v4c0 2 1.5 3 4 3s4-1 4-3V7" />
    </svg>
  ),
  styling: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 4 6 4 10c0 3 2 5.5 4 7v3a2 2 0 002 2h4a2 2 0 002-2v-3c2-1.5 4-4 4-7 0-4-4-8-8-8z" />
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="9" y1="21" x2="15" y2="21" />
    </svg>
  ),
  highlights: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  treatment: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 21h10l1-7H6l1 7z" />
      <path d="M12 3c-2 0-4 1.5-4 4 0 1.5.5 3 1.5 4h5c1-1 1.5-2.5 1.5-4 0-2.5-2-4-4-4z" />
      <path d="M10 11v3" />
      <path d="M14 11v3" />
      <line x1="6" y1="14" x2="18" y2="14" />
    </svg>
  ),
  towel: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v6a4 4 0 01-4 4H8a4 4 0 01-4-4V4z" />
      <path d="M4 4c0-1 1-2 2-2h12c1 0 2 1 2 2" />
      <line x1="8" y1="14" x2="8" y2="22" />
      <line x1="16" y1="14" x2="16" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  ),
  phone: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  mapPin: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  clock: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  star: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  starHalf: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke={color} fill="none" />
      <defs>
        <clipPath id="halfClip">
          <rect x="0" y="0" width="12" height="24" />
        </clipPath>
      </defs>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={color} clipPath="url(#halfClip)" />
    </svg>
  ),
  starEmpty: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  menu: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  close: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  mail: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  ),
};

export default function Icon({ name, size = 24, color = "currentColor" }: IconProps) {
  const renderIcon = icons[name];
  if (!renderIcon) return null;
  return renderIcon(size, color);
}
