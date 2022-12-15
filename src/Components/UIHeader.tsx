import { Colors } from '@Styles';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

interface IProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const UIHeader = (props: IProps) => {
  const { title, containerStyle, titleStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default UIHeader;

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: Colors.gray_blue,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
});
