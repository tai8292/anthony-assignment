import { UICryptoItem, UIHeader } from '@Components';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@Styles';
import { CryptoType } from 'DataType';
import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface IProps {}

const fakeData: Array<CryptoType> = [{ id: '1' }, { id: '1' }, { id: '1' }, { id: '1' }];

const Home: React.FC<IProps> = () => {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<CryptoType> = ({ item, index }) => {
    return <UICryptoItem key={index} data={item} />;
  };

  const goToAddCypto = () => {
    navigation.navigate('AddCypto');
  };

  return (
    <View style={styles.wrapper}>
      <UIHeader title="CryptoTracker Pro" />
      <View style={styles.content}>
        <View>
          <FlatList bounces={false} data={fakeData} renderItem={renderItem} />
        </View>
        <View style={styles.addContainer}>
          <TouchableOpacity onPress={goToAddCypto}>
            <Text style={styles.txtAdd}>+ Add a Cryptocurrency</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  addContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  txtAdd: {
    fontSize: 16,
    color: Colors.black,
  },
});

export default Home;
