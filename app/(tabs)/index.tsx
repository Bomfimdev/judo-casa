import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '@/src/features/auth/AuthContext';
import { colors } from '@/src/theme/colors';

export default function HomeScreen() {
  const { profile, configured, signOut } = useAuth();
  const firstName = (profile?.nome || 'Judoca').split(' ')[0];
  const initials = (profile?.nome || 'JC')
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.brand}>
          Judo<Text style={styles.brandAccent}>Casa</Text>
        </Text>
        <Pressable onPress={() => signOut()} style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </Pressable>
      </View>

      <View style={styles.greeting}>
        <Text style={styles.greetingSub}>
          {configured ? profile?.papel ?? 'sem perfil' : 'modo local · configure Supabase'}
        </Text>
        <Text style={styles.greetingName}>
          Olá, <Text style={styles.greetingAccent}>{firstName}!</Text>
        </Text>
      </View>
      {!configured ? (
        <Link href="/(auth)/login" style={styles.authHint}>
          Abrir login (após .env)
        </Link>
      ) : null}

      <View style={[styles.card, styles.beltCard]}>
        <View style={styles.beltTop}>
          <View>
            <Text style={styles.beltLabel}>Faixa Atual</Text>
            <Text style={styles.beltName}>Branca</Text>
          </View>
          <View style={styles.beltIcon}>
            <Text style={{ fontSize: 22 }}>🥋</Text>
          </View>
        </View>
        <View style={styles.progressRow}>
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: '12%' }]} />
          </View>
          <Text style={styles.barPct}>12%</Text>
        </View>
        <Text style={styles.beltReq}>Checklist e presença alimentam o exame</Text>
      </View>

      <View style={[styles.card, styles.nextClass]}>
        <View style={styles.dayBlock}>
          <Text style={styles.dayName}>QUA</Text>
          <Text style={styles.dayNum}>05</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.nextLabel}>Próxima aula</Text>
          <Text style={styles.nextTitle}>Turma Adulto · 19:00</Text>
          <Text style={styles.nextMeta}>CAP Samambaia · Q. 101</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Comunicados</Text>
      <View style={[styles.card, styles.commCard]}>
        <Text style={styles.commTitle}>Bem-vindo ao Judo Casa</Text>
        <Text style={styles.commBody}>
          UI baseada no protótipo HTML. Auth e dados vêm na próxima etapa (Supabase).
        </Text>
      </View>

      <Image
        source={require('../../assets/logo-cap.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: colors.bg },
  content: { paddingBottom: 32 },
  header: {
    backgroundColor: colors.bgCard,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  brand: {
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.fg,
  },
  brandAccent: { color: colors.red },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.redGhost,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: colors.red, fontWeight: '600', fontSize: 14 },
  greeting: { paddingHorizontal: 20, paddingTop: 22, paddingBottom: 8 },
  greetingSub: { fontSize: 13, color: colors.fg3 },
  greetingName: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.fg,
    marginTop: 2,
  },
  greetingAccent: { color: colors.red },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  beltCard: { marginHorizontal: 20, marginTop: 12, padding: 18 },
  beltTop: { flexDirection: 'row', justifyContent: 'space-between' },
  beltLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.fg3,
    marginBottom: 4,
  },
  beltName: { fontSize: 24, fontWeight: '800', letterSpacing: 0.5, color: colors.fg },
  beltIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.bgSection,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 14 },
  barBg: {
    flex: 1,
    height: 8,
    backgroundColor: colors.bgSection,
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: { height: '100%', backgroundColor: colors.red, borderRadius: 4 },
  barPct: { fontSize: 13, fontWeight: '500', color: colors.fg2, minWidth: 36, textAlign: 'right' },
  beltReq: { fontSize: 12, color: colors.fg3, marginTop: 6 },
  nextClass: {
    marginHorizontal: 20,
    marginTop: 8,
    padding: 16,
    flexDirection: 'row',
    gap: 14,
    alignItems: 'flex-start',
  },
  dayBlock: {
    backgroundColor: colors.red,
    borderRadius: 12,
    minWidth: 52,
    paddingVertical: 8,
    paddingHorizontal: 6,
    alignItems: 'center',
  },
  dayName: { color: colors.onPrimary, fontSize: 11, fontWeight: '700' },
  dayNum: { color: colors.onPrimary, fontSize: 20, fontWeight: '800' },
  nextLabel: { fontSize: 12, color: colors.fg3, fontWeight: '600' },
  nextTitle: { fontSize: 16, fontWeight: '600', color: colors.fg, marginTop: 2 },
  nextMeta: { fontSize: 12, color: colors.fg3, marginTop: 4 },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: colors.fg3,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  commCard: { marginHorizontal: 20, padding: 16 },
  commTitle: { fontSize: 15, fontWeight: '600', color: colors.fg },
  commBody: { fontSize: 13, color: colors.fg2, marginTop: 6, lineHeight: 18 },
  logo: { width: 120, height: 60, alignSelf: 'center', marginTop: 28, opacity: 0.85 },
  authHint: {
    marginHorizontal: 20,
    marginBottom: 8,
    color: colors.red,
    fontWeight: '600',
  },
});
