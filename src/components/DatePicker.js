import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = ({setDate, isVisible, showPicker, hidePicker }) => (
  <View style={styles.datePickerContainer}>
   
    <Button title="Seleccionar fecha" onPress={showPicker} />
    <DateTimePickerModal
      isVisible={isVisible}
      mode="date"
      onConfirm={(selectedDate) => {
        setDate(selectedDate);
        hidePicker();
      }}
      onCancel={hidePicker}
    />
    
  </View>
);

const styles = StyleSheet.create({
  datePickerContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default DatePicker;

