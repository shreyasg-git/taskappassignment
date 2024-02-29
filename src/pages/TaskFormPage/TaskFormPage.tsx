import {useNavigation, useRoute} from '@react-navigation/native';
// import {useRealm} from '@realm/react';
import Realm from 'realm';
import React, {useEffect, useMemo, useState} from 'react';
import {BackHandler, Button, ToastAndroid, View} from 'react-native';
import Input from '../../components/TextInput/TextInput';
import {Colors} from '../../consts';
import IconButton from '../../ui/IconButton';
import Padding from '../../ui/Padding';
import {RealmContext, Task} from '../../realm';
import {DatePicker} from '../../components/DatePicker';
import {Typography} from '../../ui';
import moment, {calendarFormat} from 'moment';
import Alarm from '../../components/Alarms/Alarms';
import {NativeModules} from 'react-native';
import PageHeader from '../../components/PageHeader';
export const FormModes = {CREATE: 'CREATE', EDIT: 'EDIT'};

const {useRealm, useObject} = RealmContext;
const {AlarmModule} = NativeModules;

type TaskFormPageProps = {};

const TaskFormPage: React.FC<TaskFormPageProps> = ({}) => {
  const {goBack} = useNavigation();
  const {params, name} = useRoute();

  const realm = useRealm();

  const task = useMemo(() => {
    if (params?.taskId) {
      const record = realm.objectForPrimaryKey(Task, params?.taskId);
      console.log('FOUND RECORD ::', record);

      return record;
    }
  }, [params]);

  let _task: any;
  if (params?.taskId) {
    _task = useObject(Task, params?.taskId);
  }

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDesc] = useState(task?.description || '');
  const [softDate, setSoftDate] = useState(task?.due_date || new Date());
  const [height, setHeight] = useState<number>(0);
  const [setAlarm, setSetAlarm] = useState(true);

  const setDueDate = (date: any) => {
    console.log('SET DUE DATE ::', date);
    setSoftDate(date);

    if (_task) {
      realm.write(() => {
        _task.due_date = date;
      });
    }
  };

  const formMode = useMemo(() => {
    if (name === 'EditTask') {
      return FormModes.EDIT;
    }
    return FormModes.CREATE;
  }, [name]);

  const createTask = () => {
    try {
      realm.write(() => {
        realm.create('Task', {
          _id: new Realm.BSON.ObjectId(),
          description,
          title,
          due_date: softDate,
          remind_me: setAlarm,
        });
      });
      if (setAlarm) {
        AlarmModule.setAlarm(softDate.getTime().toString(), title);
      }
    } catch (error) {
      console.log('ERROR IN CREATE Task', error);
    }
  };

  const runValidations = () => {
    if (title.length === 0) {
      ToastAndroid.showWithGravity(
        'Please Enter Title',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      return false;
    }
    return true;
  };
  // saves the soft state
  const editTask = () => {
    realm.write(() => {
      if (task) {
        console.log('TaskForm:editTask :: ', description, title, softDate);

        task.description = description as 'string';
        task.title = title as 'string';
        task.due_date = softDate as any;
        // task.updatedAt = new Date().toISOString() as 'date';
      }
    });
  };
  const saveProgress = () => {
    if (description?.length && title?.length) {
      switch (formMode) {
        case FormModes.CREATE:
          createTask();
          return;
        case FormModes.EDIT:
          editTask();
          return;
      }
    }
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      goBack,
    );

    return () => backHandler.remove();
  }, [task, description, title]);

  return (
    <>
      <PageHeader>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <IconButton
              icon="chevron-left"
              iconColor="#000"
              onPress={() => {
                goBack();
                saveProgress();
              }}
            />
            <DatePicker date={softDate} setDate={setDueDate} label="Due : " />
          </View>
          <Alarm
            value={setAlarm}
            setValue={setSetAlarm}
            disabled={formMode === FormModes.EDIT}
          />
        </View>
      </PageHeader>
      <View
        // https://medium.com/@arpith/react-native-full-screen-textinputs-677dc2262adb#:~:text=There%20are%20two%20things%20that,keyboard%20is%20up%20or%20dismissed).
        onLayout={ev => {
          const fullHeight = ev.nativeEvent.layout.height - 80;
          setHeight(fullHeight);
        }}
        style={{
          backgroundColor: Colors.background,
          padding: 10,
          height: '100%',
        }}>
        <Input
          placeholder="New Task"
          autoFocus
          style={{
            height: 55,
            flex: 1,
            verticalAlign: 'middle',
            backgroundColor: Colors.background,
            borderRadius: 0,
            fontSize: 25,
            fontWeight: 'bold',
          }}
          selectionColor={Colors.dark}
          placeholderTextColor={Colors.darkGrey}
          value={title}
          onChangeText={text => {
            setTitle(text);
          }}
        />

        <Input
          placeholder="Click To Type..."
          verticalAlign="middle"
          textAlignVertical="top"
          style={{
            height,
            alignSelf: 'flex-start',
            backgroundColor: Colors.background,
            width: '100%',
          }}
          selectionColor={Colors.darkGrey}
          placeholderTextColor={Colors.darkGrey}
          value={description}
          multiline
          numberOfLines={50}
          flex={1}
          onChangeText={text => {
            setDesc(text);
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          // height: 60,
        }}>
        <Button
          title="Save"
          color={Colors.primaryYellow}
          onPress={() => {
            const isValid = runValidations();
            if (!isValid) {
              return;
            }
            saveProgress();
            goBack();
          }}
        />
      </View>
    </>
  );
};
export default TaskFormPage;
