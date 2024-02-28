import React, {useState} from 'react';
import _DatePicker from 'react-native-date-picker';
import {Button} from 'react-native';

type DatePickerProps = {};

const DatePicker: React.FC<DatePickerProps> = ({}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
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
