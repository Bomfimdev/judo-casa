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

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    setErro(null);
    if (!supabaseConfigured) {
      setErro('Supabase ainda não configurado (.env).');
      return;
    }
    if (!nome.trim() || !email.trim() || senha.length < 6) {
      setErro('Preencha nome, e-mail e senha (mín. 6).');
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: senha,
      options: {
        data: {
          nome: nome.trim(),
          papel: 'aluno',
          data_nascimento: nascimento || null,
        },
      },
    });
    if (error) {
      setLoading(false);
      setErro('Não foi possível criar a conta. Tente outro e-mail.');
      return;
    }
    if (data.user) {
      await supabase
        .from('profiles')
        .update({
          nome: nome.trim(),
          data_nascimento: nascimento || null,
        })
        .eq('id', data.user.id);
    }
    setLoading(false);
    router.replace('/(tabs)');
  }

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.brand}>
        Criar conta <Text style={styles.accent}>aluno</Text>
      </Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholderTextColor={colors.fg3} />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={colors.fg3}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        placeholderTextColor={colors.fg3}
      />

      <Text style={styles.label}>Nascimento (AAAA-MM-DD)</Text>
      <TextInput
        style={styles.input}
        value={nascimento}
        onChangeText={setNascimento}
        placeholder="2002-01-15"
        placeholderTextColor={colors.fg3}
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <Pressable style={styles.btn} onPress={onSubmit} disabled={loading}>
        {loading ? (
          <ActivityIndicator color={colors.onPrimary} />
        ) : (
          <Text style={styles.btnText}>Cadastrar</Text>
        )}
      </Pressable>

      <Link href="/(auth)/login" style={styles.link}>
        Já tenho conta
      </Link>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg, padding: 24, justifyContent: 'center' },
  brand: { fontSize: 28, fontWeight: '800', color: colors.fg, marginBottom: 20 },
  accent: { color: colors.red },
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
