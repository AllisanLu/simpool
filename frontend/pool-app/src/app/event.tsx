import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppShell } from '@/components/app-shell';
import { CarCard } from '@/components/car-card';
import { DriverFormModal } from '@/components/driver-form-modal';
import { EventForm } from '@/components/event-form';
import { emptyDriverForm, initialCars } from '@/data/mock-data';
import type { DriverFormState, PoolCar } from '@/types/pool';

export default function EventPage() {
  const router = useRouter();
  const params = useLocalSearchParams<{ mode?: string; eventName?: string; eventDescription?: string }>();
  const initialMode = params.mode === 'create' ? false : true;
  const [eventCreated, setEventCreated] = useState(initialMode);
  const [eventName, setEventName] = useState(
    typeof params.eventName === 'string' ? params.eventName : 'Something',
  );
  const [eventDescription, setEventDescription] = useState(
    typeof params.eventDescription === 'string' ? params.eventDescription : 'waho',
  );
  const [cars, setCars] = useState<PoolCar[]>(initialCars);
  const [driverModalOpen, setDriverModalOpen] = useState(false);
  const [driverForm, setDriverForm] = useState<DriverFormState>(emptyDriverForm);

  const onCreateEvent = () => {
    setEventCreated(true);
  };

  const handleDriverFieldChange = (field: keyof DriverFormState, value: string) => {
    setDriverForm((current) => ({ ...current, [field]: value }));
  };

  const handleAddDriver = () => {
    const trimmedName = driverForm.name.trim();
    if (!trimmedName) {
      return;
    }

    const newCar: PoolCar = {
      id: Date.now(),
      driver: trimmedName,
      model: driverForm.model.trim() || 'Unknown model',
      plate: driverForm.plate.trim() || 'N/A',
      description: driverForm.description.trim() || 'New ride added.',
      passengers: [],
      capacity: Number(driverForm.capacity) || 5,
    };

    setCars((current) => [newCar, ...current]);
    setDriverForm(emptyDriverForm);
    setDriverModalOpen(false);
  };

  const handleJoinCar = (carId: number) => {
    setCars((current) =>
      current.map((car) =>
        car.id === carId
          ? {
              ...car,
              passengers: [...car.passengers, 'You'],
            }
          : car,
      ),
    );
  };

  const handleEditCar = (carId: number) => {
    setCars((current) =>
      current.map((car) =>
        car.id === carId
          ? {
              ...car,
              passengers: car.passengers.length > 0 ? car.passengers : ['Guest'],
            }
          : car,
      ),
    );
  };

  return (
    <AppShell>
      {!eventCreated ? (
        <EventForm
          eventName={eventName}
          eventDescription={eventDescription}
          onNameChange={setEventName}
          onDescriptionChange={setEventDescription}
          onCreateEvent={onCreateEvent}
        />
      ) : (
        <View style={styles.dashboardStage}>
          <View style={styles.pageTitleRow}>
            <Text style={styles.pageTitle}>{eventName}</Text>
            <Pressable onPress={() => router.back()}>
              <Text style={styles.backButton}>‹</Text>
            </Pressable>
          </View>

          <View style={styles.dashboardCenter}>
            <View style={styles.cardGroup}>
              {cars.map((car) => (
                <CarCard key={car.id} car={car} onJoin={handleJoinCar} onEdit={handleEditCar} />
              ))}
            </View>

            <Pressable style={styles.greenButtonLarge} onPress={() => setDriverModalOpen(true)}>
              <Text style={styles.greenButtonText}>I&apos;m a driver</Text>
            </Pressable>
          </View>

          <DriverFormModal
            visible={driverModalOpen}
            driverForm={driverForm}
            onClose={() => setDriverModalOpen(false)}
            onFieldChange={handleDriverFieldChange}
            onAddDriver={handleAddDriver}
          />
        </View>
      )}
    </AppShell>
  );
}

const styles = StyleSheet.create({
  dashboardStage: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
  },
  pageTitleRow: {
    width: '100%',
    maxWidth: 520,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 18,
    position: 'relative',
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1d1d1d',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    right: 18,
    fontSize: 26,
    color: '#3d9f4a',
    fontWeight: '700',
  },
  dashboardCenter: {
    width: '100%',
    maxWidth: 520,
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  cardGroup: {
    width: '100%',
    gap: 16,
    marginBottom: 24,
  },
  greenButtonLarge: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 22,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  greenButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});
