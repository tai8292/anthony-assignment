import { Icons } from '@Assets';
import { Colors } from '@Styles';
import { formatMoney } from '@Utils';
import { CryptoType } from 'DataType';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface IProps {
  data: CryptoType;
}

const UICryptoItem = (props: IProps) => {
  const { data } = props;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { Asset, market_data } = data;
  const getColor = () => {
    if (market_data?.percent_change_usd_last_24_hours) {
      if (Number(market_data?.percent_change_usd_last_24_hours) > 0) {
        return Colors.green;
      }
      if (Number(market_data?.percent_change_usd_last_24_hours) < 0) {
        return Colors.red;
      }
    }

    return Colors.orange;
  };

  const color = getColor();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.txtName}>{Asset?.name}</Text>
          <Text style={styles.txtCode}>{Asset?.symbol}</Text>
        </View>
        <View>
          <Text style={styles.txtName}>{`$${formatMoney(market_data?.price_usd || 0)}`}</Text>
          <View style={[styles.row, styles.price]}>
            {market_data?.percent_change_usd_last_24_hours && (
              <Image
                style={[
                  styles.trendIcon,
                  {
                    tintColor: color,
                    transform: [
                      {
                        rotate:
                          market_data?.percent_change_usd_last_24_hours > 0 ? '0deg' : '180deg',
                      },
                    ],
                  },
                ]}
                source={Icons.ic_up}
              />
            )}
            <Text style={[styles.txtPercent, { color: color }]}>
              {formatMoney(market_data?.percent_change_usd_last_24_hours || 0)}
            </Text>
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
