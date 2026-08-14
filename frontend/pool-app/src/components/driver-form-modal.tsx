import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import type { DriverFormState } from '@/types/pool';

type DriverFormModalProps = {
  visible: boolean;
  driverForm: DriverFormState;
  onClose: () => void;
  onFieldChange: (field: keyof DriverFormState, value: string) => void;
  onAddDriver: () => void;
};

export function DriverFormModal({
  visible,
  driverForm,
  onClose,
  onFieldChange,
  onAddDriver,
}: DriverFormModalProps) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <Text style={styles.modalTitle}>Add Driver</Text>
          <Text style={styles.modalSubText}>Please fill in the information below to add a new driver</Text>

          <TextInput
            value={driverForm.name}
            onChangeText={(value) => onFieldChange('name', value)}
            style={styles.modalInput}
            placeholder="Driver *"
            placeholderTextColor="#777"
          />
          <TextInput
            value={driverForm.model}
            onChangeText={(value) => onFieldChange('model', value)}
            style={styles.modalInput}
            placeholder="Car Model"
            placeholderTextColor="#777"
          />
          <TextInput
            value={driverForm.plate}
            onChangeText={(value) => onFieldChange('plate', value)}
            style={styles.modalInput}
            placeholder="License Plate"
            placeholderTextColor="#777"
          />
          <TextInput
            value={driverForm.description}
            onChangeText={(value) => onFieldChange('description', value)}
            style={[styles.modalInput, styles.textAreaModal]}
            multiline
            placeholder="Description"
            placeholderTextColor="#777"
          />
          <Text style={styles.capacityLabel}>Maximum Capacity</Text>
          <TextInput
            value={driverForm.capacity}
            onChangeText={(value) => onFieldChange('capacity', value)}
            style={styles.modalInput}
            keyboardType="number-pad"
          />

          <View style={styles.modalActions}>
            <Pressable onPress={onClose}>
              <Text style={styles.cancelText}>CANCEL</Text>
            </Pressable>
            <Pressable onPress={onAddDriver}>
              <Text style={styles.addText}>ADD</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '88%',
    maxWidth: 470,
    backgroundColor: '#f3f3f3',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 4 },
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1c1c1c',
    marginBottom: 8,
  },
  modalSubText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 18,
  },
  modalInput: {
    borderBottomWidth: 1,
    borderColor: '#b8b8b8',
    paddingVertical: 10,
    paddingHorizontal: 6,
    fontSize: 16,
    color: '#1d1d1d',
    marginBottom: 14,
  },
  textAreaModal: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  capacityLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 22,
    marginTop: 14,
  },
  cancelText: {
    color: '#4CAF50',
    fontWeight: '700',
    fontSize: 14,
  },
  addText: {
    color: '#4CAF50',
    fontWeight: '700',
    fontSize: 14,
  },
});
