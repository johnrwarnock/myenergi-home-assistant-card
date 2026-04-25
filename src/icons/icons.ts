import { svg } from "lit";

const icon = (path: string) =>
  svg`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">${path}</svg>`;

export const homeIcon = () =>
  icon(
    `<path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
     <path d="M9 22V12h6v10"/>`
  );

export const gridIcon = () =>
  icon(
    `<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
     <circle cx="12" cy="12" r="3"/>`
  );

export const solarIcon = () =>
  icon(
    `<rect x="2" y="6" width="9" height="6" rx="1"/>
     <rect x="13" y="6" width="9" height="6" rx="1"/>
     <rect x="2" y="14" width="9" height="6" rx="1"/>
     <rect x="13" y="14" width="9" height="6" rx="1"/>
     <path d="M12 3v2M12 19v2M3 12H1M23 12h-2"/>`
  );

export const libbiIcon = () =>
  icon(
    `<rect x="6" y="4" width="12" height="18" rx="2"/>
     <path d="M10 2h4M9 9h6M9 13h6M9 17h4"/>`
  );

export const zappiIcon = () =>
  icon(
    `<path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h11l5 5v5a2 2 0 0 1-2 2h-2"/>
     <circle cx="7" cy="17" r="2"/>
     <circle cx="17" cy="17" r="2"/>
     <path d="M13 6v4l3 2"/>`
  );

export const eddiIcon = () =>
  icon(
    `<path d="M12 2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/>
     <path d="M12 13v4M8 22h8M10 22v-2h4v2"/>`
  );

export const leafIcon = () =>
  svg`<svg viewBox="0 0 24 24" width="20" height="20" fill="#84ff00">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 3-11 4l-1-3.5C12 2 17 2 17 8z"/>
  </svg>`;
