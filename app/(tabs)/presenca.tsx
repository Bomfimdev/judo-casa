import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/theme/colors';

export default function PresencaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Presença</Text>
      <Text style={styles.sub}>Check-in e confirmação do Sensei — espelhar protótipo HTML.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '800', color: colors.fg },
  sub: { marginTop: 8, fontSize: 14, color: colors.fg2, lineHeight: 20 },
});
