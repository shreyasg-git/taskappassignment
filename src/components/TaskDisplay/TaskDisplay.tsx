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
import Icon from '../../ui/Icon';

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
  const endOfString =
    task.description && task.description?.length >= CLIP_THRESHOLD ? '...' : '';

  const clippedDesc = task.description?.slice(0, CLIP_THRESHOLD) + endOfString;

  const statusColor = task.completed
    ? Colors.green
    : task.due_date.getTime() < new Date().getTime()
    ? Colors.fadedRed
    : Colors.secondaryYellow;

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
      <View
        style={{
          // height: '100%',
          backgroundColor: statusColor,
          position: 'absolute',
          width: 7,
          top: 0,
          bottom: 0,
        }}
      />
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
            typography="H5RegularDarkGrey"
            numberOfLines={1}
            ellipsizeMode="tail">
            {clippedDesc}
          </Typography>
        </View>
      </View>
      <View style={{padding: 1}}>
        <View style={{flex: 1}}>
          <Typography typography="H7Bold">
            {moment(_task?.due_date).calendar()}
          </Typography>
          <Typography typography="H7RegularDarkGrey" textAlign="right">
            {moment(_task?.due_date).fromNow()}
          </Typography>
        </View>
        {task.remind_me ? (
          <View style={{alignItems: 'flex-end'}}>
            <Icon name="Bell" color={Colors.darkGrey} size={20} />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
export default TaskDisplay;
