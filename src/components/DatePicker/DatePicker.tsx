import React, {useState} from 'react';
import _DatePicker from 'react-native-date-picker';
import {Button, TouchableOpacity} from 'react-native';
import {Typography} from '../../ui';

type DatePickerProps = {date: any; setDate: any};

const DatePicker: React.FC<DatePickerProps> = ({date, setDate}) => {
  // const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{
          borderWidth: 1,
          borderColor: '#888888',
          borderRadius: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 110,
          padding: 2,
        }}>
        <Typography typography="H6RegularDarkGrey">Open Calendar</Typography>
      </TouchableOpacity>
      <_DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          console.log('DATE PICKER :: NEW DATE', date);

          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
export default DatePicker;
