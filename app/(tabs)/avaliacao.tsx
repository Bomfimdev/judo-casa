import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/theme/colors';

export default function AvaliacaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliação</Text>
      <Text style={styles.sub}>Feedbacks por técnica — protótipo `avaliacao`.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '800', color: colors.fg },
  sub: { marginTop: 8, fontSize: 14, color: colors.fg2, lineHeight: 20 },
});
