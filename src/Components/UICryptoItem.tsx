import { Icons } from '@Assets';
import { Colors } from '@Styles';
import { CryptoType } from 'DataType';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface IProps {
  data: CryptoType;
}

const UICryptoItem = (props: IProps) => {
  const { data } = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.icon} source={Icons.logo} />
        <View style={styles.info}>
          <Text style={styles.txtName}>Bitcoin</Text>
          <Text style={styles.txtCode}>BTC</Text>
        </View>
        <View>
          <Text style={styles.txtName}>$7,216.68</Text>
          <View style={[styles.row, styles.price]}>
            <Image style={styles.trendIcon} source={Icons.ic_up} />
            <Text style={styles.txtPercent}>1.82%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UICryptoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 30,
    paddingVertical: 20,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
  trendIcon: {
    width: 16,
    height: 16,
  },
  info: {
    flex: 1,
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
  },
  txtName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  txtCode: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 2,
    color: Colors.black,
  },
  price: {
    justifyContent: 'flex-end',
    marginTop: 2,
  },
  txtPercent: {
    color: Colors.red,
    fontSize: 14,
    fontWeight: '300',
  },
});
