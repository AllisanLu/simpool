import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { PoolCar } from '@/types/pool';

type CarCardProps = {
  car: PoolCar;
  onJoin: (carId: number) => void;
  onEdit: (carId: number) => void;
};

export function CarCard({ car, onJoin, onEdit }: CarCardProps) {
  const seatsRemaining = Math.max(car.capacity - car.passengers.length, 0);

  return (
    <View style={styles.carCard}>
      <View style={styles.cardInnerRow}>
        <Text style={styles.carName}>{car.driver}</Text>
        <View style={styles.cardActions}>
          <Pressable style={styles.smallSecondaryButton} onPress={() => onEdit(car.id)}>
            <Text style={styles.secondaryButtonText}>Edit</Text>
          </Pressable>
          <Pressable style={styles.smallPrimaryButton} onPress={() => onJoin(car.id)}>
            <Text style={styles.primaryButtonTextSmall}>Join</Text>
          </Pressable>
        </View>
      </View>

      {car.passengers.length > 0 && (
        <View style={styles.ridersList}>
          {car.passengers.map((person) => (
            <Text key={person} style={styles.riderText}>
              • {person}
            </Text>
          ))}
        </View>
      )}

      <Text style={styles.metaText}>Seats available: {seatsRemaining}/{car.capacity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  carCard: {
    backgroundColor: '#efefef',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardInnerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  cardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  smallSecondaryButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#a4d99d',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  secondaryButtonText: {
    color: '#4CAF50',
    fontWeight: '700',
    fontSize: 12,
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
  ridersList: {
    marginTop: 10,
    gap: 2,
  },
  riderText: {
    fontSize: 13,
    color: '#222',
  },
  metaText: {
    marginTop: 10,
    fontSize: 12,
    color: '#555',
  },
});
