/** Tokens do protótipo docs/design/judo-casa-ui-prototype.html */

export const colors = {
  red: '#FF0D19',
  redDim: '#CC0A14',
  redGhost: 'rgba(255,13,25,0.10)',
  bg: '#F7F7F5',
  bgCard: '#FFFFFF',
  bgSection: '#EFEFED',
  fg: '#1A1A1B',
  fg2: '#56595B',
  fg3: '#9A9B9C',
  border: 'rgba(0,0,0,0.09)',
  success: '#1A9E5B',
  warn: '#E08000',
  info: '#1474C4',
  onPrimary: '#FFFFFF',
  /** aliases usados no app */
  primary: '#FF0D19',
  neutral: '#56595B',
  neutralDark: '#1A1A1B',
  background: '#F7F7F5',
  muted: '#9A9B9C',
} as const;

export const colorsDark = {
  red: '#FF0D19',
  redDim: '#CC0A14',
  redGhost: 'rgba(255,13,25,0.18)',
  bg: '#141415',
  bgCard: '#1E1E20',
  bgSection: '#252528',
  fg: '#F0F0EE',
  fg2: '#A0A2A4',
  fg3: '#5A5C5E',
  border: 'rgba(255,255,255,0.08)',
  success: '#1A9E5B',
  warn: '#E08000',
  info: '#1474C4',
  onPrimary: '#FFFFFF',
  primary: '#FF0D19',
  neutral: '#A0A2A4',
  neutralDark: '#F0F0EE',
  background: '#141415',
  muted: '#5A5C5E',
} as const;

export const fonts = {
  display: 'BebasNeue',
  body: 'DMSans',
  mono: 'DMMono',
} as const;

export type CapColor = keyof typeof colors;
