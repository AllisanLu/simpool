import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type EventFormProps = {
  eventName: string;
  eventDescription: string;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onCreateEvent: () => void;
};

export function EventForm({
  eventName,
  eventDescription,
  onNameChange,
  onDescriptionChange,
  onCreateEvent,
}: EventFormProps) {
  return (
    <View style={styles.formShell}>
      <View style={styles.cardForm}>
        <View style={styles.fieldRow}>
          <Text style={styles.fieldLabel}>Event Name</Text>
          <TextInput
            value={eventName}
            onChangeText={onNameChange}
            style={styles.input}
            placeholder="Event Name"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.fieldRow}>
          <Text style={styles.fieldLabel}>Description</Text>
          <TextInput
            value={eventDescription}
            onChangeText={onDescriptionChange}
            style={[styles.input, styles.textArea]}
            multiline
            placeholder="Description"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.dateRow}>
          <View style={styles.dateFieldHalf}>
            <Text style={styles.fieldLabel}>Event Date</Text>
            <TextInput value="mm/dd/yyyy" style={styles.inputDate} />
          </View>
          <View style={styles.dateFieldHalf}>
            <Text style={styles.fieldLabel}>Event Time</Text>
            <TextInput value="--:--" style={styles.inputDate} />
          </View>
        </View>

        <Pressable style={styles.greenButtonLarge} onPress={onCreateEvent}>
          <Text style={styles.greenButtonText}>CREATE EVENT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formShell: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardForm: {
    width: '92%',
    maxWidth: 420,
    backgroundColor: '#efeef0',
    borderRadius: 18,
    padding: 18,
    gap: 12,
  },
  fieldRow: {
    width: '100%',
    gap: 6,
  },
  fieldLabel: {
    fontSize: 14,
    color: '#555',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cfcfcf',
    borderRadius: 8,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1c1c1c',
  },
  textArea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  dateFieldHalf: {
    flex: 1,
    gap: 6,
  },
  inputDate: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 14,
    color: '#444',
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
