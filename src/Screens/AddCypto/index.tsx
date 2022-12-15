import { Colors } from '@Styles';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface IProps {}

const AddCypto: React.FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add a Cryptocurrency</Text>
      <TextInput
        style={styles.input}
        placeholder="Search a cryptocurrency"
        placeholderTextColor={Colors.gray}
      />
      <View style={styles.add}>
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.txtAdd}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCypto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -100,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 10,
    marginTop: 16,
    paddingHorizontal: 10,
    fontSize: 14,
    color: Colors.black,
  },
  add: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  btnAdd: {
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 50,
    borderRadius: 10,
  },
  txtAdd: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
