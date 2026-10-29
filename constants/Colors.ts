import { colors, colorsDark } from '@/src/theme/colors';

export default {
  light: {
    text: colors.fg,
    background: colors.bg,
    tint: colors.red,
    tabIconDefault: colors.fg3,
    tabIconSelected: colors.red,
    card: colors.bgCard,
  },
  dark: {
    text: colorsDark.fg,
    background: colorsDark.bg,
    tint: colorsDark.red,
    tabIconDefault: colorsDark.fg3,
    tabIconSelected: colorsDark.red,
    card: colorsDark.bgCard,
  },
};
