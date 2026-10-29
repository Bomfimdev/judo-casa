import { Link, router } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { supabase, supabaseConfigured } from '@/src/lib/supabase';
import { colors } from '@/src/theme/colors';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    setErro(null);
    if (!supabaseConfigured) {
      setErro('Supabase ainda não configurado (.env).');
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: senha,
    });
    setLoading(false);
    if (error) {
      setErro('Não foi possível entrar. Confira e-mail e senha.');
      return;
    }
    router.replace('/(tabs)');
  }

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.brand}>
        Judo<Text style={styles.accent}>Casa</Text>
      </Text>
      <Text style={styles.sub}>Entre para continuar</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholder="voce@email.com"
        placeholderTextColor={colors.fg3}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        placeholder="••••••••"
        placeholderTextColor={colors.fg3}
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <Pressable style={styles.btn} onPress={onSubmit} disabled={loading}>
        {loading ? (
          <ActivityIndicator color={colors.onPrimary} />
        ) : (
          <Text style={styles.btnText}>Entrar</Text>
        )}
      </Pressable>

      <Link href="/(auth)/cadastro" style={styles.link}>
        Criar conta de aluno
      </Link>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg, padding: 24, justifyContent: 'center' },
  brand: { fontSize: 36, fontWeight: '800', color: colors.fg },
  accent: { color: colors.red },
  sub: { marginTop: 6, marginBottom: 28, color: colors.fg2, fontSize: 14 },
  label: { fontSize: 12, fontWeight: '600', color: colors.fg3, marginBottom: 6 },
  input: {
    backgroundColor: colors.bgCard,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    color: colors.fg,
    fontSize: 16,
  },
  erro: { color: colors.red, marginBottom: 12, fontSize: 13 },
  btn: {
    backgroundColor: colors.red,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  btnText: { color: colors.onPrimary, fontWeight: '700', fontSize: 16 },
  link: { marginTop: 18, textAlign: 'center', color: colors.red, fontWeight: '600' },
});
