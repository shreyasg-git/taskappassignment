import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors, DateFormats} from '../../consts';
import {Task} from '../../realm';
import Typography from '../../ui/typography/Typography';
import moment from 'moment';
// import {useNavigation} from '@react-navigation/native';
type TaskDisplayProps = {task: Task};

const TaskDisplay: React.FC<TaskDisplayProps> = ({task}) => {
  // const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        // navigate('Edittask', {taskId: task._id});

        console.log('AAAAAAAAAAAAAA NO OP');
      }}
      style={{
        // flex: 0.5,
        display: 'flex',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderStyle: 'solid',
        margin: 5,
        borderRadius: 5,
        padding: 5,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {task.title ? (
          <Typography typography="H5Bold">{task.title}</Typography>
        ) : null}
        <View>
          <Typography typography="H7RegularDarkGrey">
            {/* Created - */}
            {moment(task.due_date).format(
              DateFormats.DayMonthYearNoDashes,
            )}, {moment(task.due_date).fromNow()}
          </Typography>
          <Typography typography="H7RegularDarkGrey">
            {/* Updated -{moment(note.updatedAt).fromNow()} */}
          </Typography>
        </View>
      </View>

      <Typography typography="H6RegularDarkGrey">{task.title}</Typography>
    </TouchableOpacity>
  );
};
export default TaskDisplay;
