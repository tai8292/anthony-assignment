import { UICryptoItem, UIHeader } from '@Components';
import { cryptoStorage } from '@Core';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useStoreActions, useStoreState } from '@Store';
import { Colors } from '@Styles';
import { CryptoType } from 'DataType';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { getCryptos } = useStoreActions((actions) => actions.crypto);
  const { cryptos } = useStoreState((states) => states.crypto);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCryptos = async () => {
      setLoading(true);
      const listCrypto = await cryptoStorage.getListCrypto();
      if (listCrypto) {
        getCryptos({ assetKeys: JSON.parse(listCrypto) });
      }
      setLoading(false);
    };
    if (isFocused) {
      fetchCryptos();
    }
  }, [getCryptos, isFocused]);

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
          <FlatList extraData={cryptos} bounces={false} data={cryptos} renderItem={renderItem} />
        </View>
        <View style={styles.addContainer}>
          <TouchableOpacity onPress={goToAddCypto}>
            <Text style={styles.txtAdd}>+ Add a Cryptocurrency</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

export default Home;

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
  loading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
