import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors, DateFormats} from '../../consts';
import {Task} from '../../realm';
import Typography from '../../ui/typography/Typography';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import DatePicker from '../DatePicker/DatePicker';

type TaskDisplayProps = {task: Task};

const TaskDisplay: React.FC<TaskDisplayProps> = ({task}) => {
  const {navigate} = useNavigation();

  const onCheckBoxClick = () => {};
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        navigate('EditTask', {taskId: task._id});
      }}
      style={{
        display: 'flex',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderStyle: 'solid',
        justifyContent: 'space-between',
        margin: 5,
        borderRadius: 5,
        padding: 5,
        flexDirection: 'row',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <CheckBox
            disabled={false}
            value={isCompleted}
            onValueChange={newValue => setIsCompleted(!isCompleted)}
            lineWidth={1}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          {task.title ? (
            <Typography typography="H5Bold" textAlign="left">
              {task.title}
            </Typography>
          ) : null}

          <Typography typography="H6RegularDarkGrey">
            {task.description}
          </Typography>
        </View>
      </View>
      <View>
        <View>
          <Typography typography="H7RegularDarkGrey">
            {moment(task.due_date).calendar()}
            {/* {moment(task.due_date).format(DateFormats.DayMonthYearNoDashes)},{' '} */}
          </Typography>
          <Typography typography="H7RegularDarkGrey">
            {moment(task.due_date).fromNow()}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default TaskDisplay;
