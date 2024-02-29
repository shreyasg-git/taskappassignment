import React, {useState} from 'react';
import _DatePicker from 'react-native-date-picker';
import {Button, TouchableOpacity} from 'react-native';
import {Typography} from '../../ui';
import moment from 'moment';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type DatePickerProps = {date: any; setDate: any; label: string};

const DatePicker: React.FC<DatePickerProps> = ({date, setDate, label}) => {
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
          flexDirection: 'row',
          backgroundColor: Colors.darkGrey,
          width: 'auto',
          padding: 5,
        }}>
        {/* <Typography typography="H6RegularDarkGrey">Open Calendar</Typography> */}
        <Typography typography="H6Bold">{label}</Typography>

        <Typography typography="H6Regular">
          {moment(date).calendar()}
        </Typography>
      </TouchableOpacity>
      <_DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
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
