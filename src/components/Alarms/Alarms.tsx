import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeModules} from 'react-native';
import {Typography} from '../../ui';

type AlarmProps = {
  value: boolean;
  setValue: any;
  disabled: boolean;
};

const Alarm: React.FC<AlarmProps> = ({value, setValue, disabled}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CheckBox
        disabled={disabled}
        value={value}
        onValueChange={newVal => {
          console.log('NEW VAL', newVal);

          setValue(newVal);
        }}
      />
      {disabled ? (
        <Typography typography="H6BoldDarkGrey">Remind Me</Typography>
      ) : (
        <Typography typography="H6Bold">Remind Me</Typography>
      )}
    </View>
  );
};
export default Alarm;
