import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton from '../ui/IconButton';
import {IconType} from '../../assets/icons';
import {Colors} from '../consts';

interface FABProps {
  iconName: IconType;
  onPress: () => void;
  testID?: string;
}
const FAB: React.FC<FABProps> = ({iconName = 'plus', onPress, testID}) => {
  return (
    <View style={styles.fab} testID={testID}>
      <IconButton
        icon={iconName}
        backgroundColor={Colors.primaryYellow}
        iconSize={48}
        iconColor={Colors.white}
        onPress={onPress}
        roundness={32}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
    overflow: 'hidden',
    bottom: 16,
    elevation: 10,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    borderRadius: 32,
    shadowColor: Colors.darkGrey,
  },
});

export default FAB;
