import { svg } from "lit";

/** Hub leaf. Node icons use HA's own <ha-icon> so any mdi: icon works. */
export const leafIcon = () =>
  svg`<svg viewBox="0 0 24 24" width="20" height="20" fill="#84ff00">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 3-11 4l-1-3.5C12 2 17 2 17 8z"/>
  </svg>`;
