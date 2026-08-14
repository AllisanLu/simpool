import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <View style={styles.root}>
      <View style={styles.topBar}>
        <View style={styles.brandRow}>
          <Text style={styles.brandIcon}>🚗</Text>
          <Text style={styles.brandText}>pool</Text>
        </View>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  topBar: {
    height: 62,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandIcon: {
    fontSize: 22,
    marginRight: 6,
  },
  brandText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: -1,
  },
});
