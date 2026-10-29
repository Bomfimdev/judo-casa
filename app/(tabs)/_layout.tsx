import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { colors } from '@/src/theme/colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1E1E20' : colors.bgCard,
          borderTopColor: colors.border,
        },
        headerShown: useClientOnlyValue(false, true),
        headerStyle: { backgroundColor: colors.bgCard },
        headerTitleStyle: { fontWeight: '700', color: colors.fg },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'house.fill', android: 'home', web: 'home' }}
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="presenca"
        options={{
          title: 'Presença',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'checkmark.circle', android: 'check_circle', web: 'check_circle' }}
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="faixa"
        options={{
          title: 'Faixa',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'chart.line.uptrend.xyaxis', android: 'show_chart', web: 'show_chart' }}
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="torneios"
        options={{
          title: 'Torneios',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'trophy', android: 'emoji_events', web: 'emoji_events' }}
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="avaliacao"
        options={{
          title: 'Avaliação',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{ ios: 'doc.text', android: 'description', web: 'description' }}
              tintColor={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
