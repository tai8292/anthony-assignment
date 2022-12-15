import { cryptoStorage } from '@Core';
import { useNavigation } from '@react-navigation/native';
import { useStoreActions } from '@Store';
import { Colors } from '@Styles';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface IProps {}

const AddCypto: React.FC<IProps> = () => {
  const navigation = useNavigation();
  const { getCrypto } = useStoreActions((actions) => actions.crypto);
  const [symbol, setSymbol] = useState('');
  const [loading, setLoading] = useState(false);

  const onAddCrypto = async () => {
    setLoading(true);
    try {
      await getCrypto({ assetKey: symbol });
      const listCrypto = await cryptoStorage.getListCrypto();
      if (listCrypto) {
        const arr = JSON.parse(listCrypto);
        arr.push(symbol);
        cryptoStorage.setListCrypto(arr);
      } else {
        cryptoStorage.setListCrypto([symbol]);
      }
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', error?.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Add a Cryptocurrency</Text>
        <TextInput
          style={styles.input}
          placeholder="Search a cryptocurrency"
          placeholderTextColor={Colors.gray}
          onChangeText={(value) => setSymbol(value)}
        />
        <View style={styles.add}>
          <TouchableOpacity onPress={onAddCrypto} style={styles.btnAdd}>
            <Text style={styles.txtAdd}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
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
  loading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.loading,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
});
