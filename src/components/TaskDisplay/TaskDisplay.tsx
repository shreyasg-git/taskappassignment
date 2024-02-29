import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Colors} from '../../consts';
import {RealmContext, Task} from '../../realm';
import Typography from '../../ui/typography/Typography';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import IconButton from '../../ui/IconButton';
import Padding from '../../ui/Padding';

const {useObject, useRealm} = RealmContext;

const CLIP_THRESHOLD = 30;

type TaskDisplayProps = {task: Task};

const TaskDisplay: React.FC<TaskDisplayProps> = ({task}) => {
  const {navigate} = useNavigation();
  const realm = useRealm();
  const _task = useObject(Task, task._id);

  // const realm = useRealm();
  const deleteTask = (task: Task) => {
    realm.write(() => {
      realm.delete(task);
    });
  };

  const onCheckBoxClick = (newValue: any) => {
    if (_task) {
      realm.write(() => {
        _task.completed = newValue;
      });
    }
  };
  const [isCompleted, setIsCompleted] = useState(false);
  const endOfString =
    task.description && task.description?.length >= CLIP_THRESHOLD ? '...' : '';
  const clippedDesc = task.description?.slice(0, CLIP_THRESHOLD) + endOfString;

  return (
    <TouchableOpacity
      onPress={() => {
        navigate('EditTask', {taskId: task._id});
      }}
      style={{
        display: 'flex',
        borderWidth: 1,
        borderColor: Colors.secondaryYellow,
        backgroundColor: Colors.secondaryYellow,
        borderStyle: 'solid',
        justifyContent: 'space-between',
        // flexWrap: 'wrap',
        margin: 10,
        borderRadius: 5,
        padding: 5,
        flexDirection: 'row',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <CheckBox
            disabled={false}
            value={task?.completed}
            onValueChange={newValue => {
              console.log('CHECK BOX:: NEW VALUE', newValue);
              onCheckBoxClick(newValue);
            }}
            lineWidth={1}
          />
          <IconButton
            onPress={() => {
              console.log('DELETE TASK::NO OP');
              deleteTask(task);
            }}
            icon="delete"
            iconColor="#FF0000"
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: 2,
            overflow: 'hidden',
            // margin: 2,
          }}>
          {task.title ? (
            <Typography typography="H5Bold" textAlign="left">
              {task.title}
            </Typography>
          ) : null}
          <Padding height={15} />

          <Typography
            typography="H6RegularDarkGrey"
            numberOfLines={1}
            ellipsizeMode="tail">
            {clippedDesc}
          </Typography>
        </View>
      </View>
      <View style={{padding: 1}}>
        <View style={{flex: 1, overflow: 'visible'}}>
          <Typography typography="H7RegularDarkGrey">
            {moment(task.due_date).calendar()}
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
