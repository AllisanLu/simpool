import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { PoolEvent } from '@/types/pool';

type EventCardProps = {
  event: PoolEvent;
  onOpen: (eventId: number) => void;
  onCreate: () => void;
};

export function EventCard({ event, onOpen, onCreate }: EventCardProps) {
  return (
    <Pressable style={styles.eventCard} onPress={() => onOpen(event.id)}>
      <View style={styles.eventHeader}>
        <Text style={styles.eventTitle}>{event.name}</Text>
        <Text style={styles.eventMeta}>{event.date}</Text>
      </View>

      <Text style={styles.eventDescription}>{event.description}</Text>

      <View style={styles.eventFooter}>
        <Text style={styles.eventPeople}>{event.people} going</Text>
        <Pressable style={styles.smallPrimaryButton} onPress={onCreate}>
          <Text style={styles.primaryButtonTextSmall}>Open</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: '#efefef',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 12,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  eventMeta: {
    fontSize: 12,
    color: '#5a5a5a',
  },
  eventDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  eventFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventPeople: {
    fontSize: 12,
    color: '#555',
  },
  smallPrimaryButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  primaryButtonTextSmall: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
});
