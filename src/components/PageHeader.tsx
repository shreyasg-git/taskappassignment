import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../consts/Colors';

const PageHeader = ({onBackPress, children}: any) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: Colors.white,
    shadowColor: Colors.darkGrey,
    shadowOpacity: 0.2,
    flexDirection: 'row',
    elevation: 4,
    shadowRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    zIndex: 10,
  },
  text: {
    flex: 1,
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default PageHeader;
