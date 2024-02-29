import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {Dropdown as _Dropdown} from 'react-native-element-dropdown';
import {Colors} from '../consts';
import Icon from '../ui/Icon';

type Option = {
  label: string;
  value: string;
};

type DropDownProps = {
  selected: Option;
  setSelected: any;
  options: Array<Option>;
};

const DropDown: React.FC<DropDownProps> = ({
  selected,
  setSelected,
  options,
}) => {
  //   const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (selected.value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Sort By - {selected.label}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <_Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemContainerStyle={{
          backgroundColor: Colors.backgroundElevate,

          shadowRadius: 6,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.4,
          //   borderRadius: 32,
          shadowColor: Colors.darkGrey,
        }}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={options}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={selected.value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setSelected(item);
          setIsFocus(false);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 5,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    //   borderRadius: 32,
    shadowColor: Colors.darkGrey,
  },
  dropdown: {
    height: 30,

    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
    display: 'none',
  },
  label: {
    position: 'absolute',
    backgroundColor: Colors.background,
    left: 10,
    top: 9,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  placeholderStyle: {
    display: 'none',
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    display: 'none',

    height: 40,
    fontSize: 16,
  },
});
export default DropDown;
