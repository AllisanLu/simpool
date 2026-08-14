import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppShell } from '@/components/app-shell';
import { EventCard } from '@/components/event-card';
import { mockEvents } from '@/data/mock-data';
import type { PoolEvent } from '@/types/pool';

export default function PoolDashboardPage() {
  const router = useRouter();
  const [events] = useState<PoolEvent[]>(mockEvents);

  const handleOpenEvent = (event: PoolEvent) => {
    router.push({
      pathname: '/event',
      params: {
        mode: 'dashboard',
        eventId: String(event.id),
        eventName: event.name,
        eventDescription: event.description,
      },
    } as never);
  };

  const handleCreateNewEvent = () => {
    router.push({ pathname: '/event', params: { mode: 'create' } } as never);
  };

  return (
    <AppShell>
      <View style={styles.pageContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>My Events</Text>
          <Pressable style={styles.linkButton} onPress={() => router.push('/event' as never)}>
            <Text style={styles.linkText}>+ New</Text>
          </Pressable>
        </View>

        <View style={styles.cardList}>
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onOpen={() => router.push('/event' as never)}
              onCreate={() => router.push('/event' as never)}
            />
          ))}
        </View>
      </View>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#ededed',
    paddingHorizontal: 18,
    paddingTop: 24,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  linkButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  linkText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  cardList: {
    gap: 8,
  },
});
