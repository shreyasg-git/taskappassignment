import {useNavigation, useRoute} from '@react-navigation/native';
// import {useRealm} from '@realm/react';
import Realm from 'realm';
import React, {useEffect, useMemo, useState} from 'react';
import {BackHandler, View} from 'react-native';
import Input from '../../components/TextInput/TextInput';
import {Colors} from '../../consts';
import IconButton from '../../ui/IconButton';
import Padding from '../../ui/Padding';
import {RealmContext, Task} from '../../realm';
export const FormModes = {CREATE: 'CREATE', EDIT: 'EDIT'};

const {useRealm, useObject} = RealmContext;
type NoteFormPageProps = {};

const TaskFormPage: React.FC<NoteFormPageProps> = ({}) => {
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

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDesc] = useState(task?.description || '');

  const [height, setHeight] = useState<number>(0);

  const formMode = useMemo(() => {
    if (name === 'EditNote') {
      return FormModes.EDIT;
    }
    return FormModes.CREATE;
  }, [name]);

  const createNote = () => {
    try {
      realm.write(() => {
        realm.create('Task', {
          _id: new Realm.BSON.ObjectId(),
          description,
          title,
        });
      });
    } catch (error) {
      console.log('ERROR IN CREAT NOTE', error);
    }
  };

  const editNote = () => {
    realm.write(() => {
      if (task) {
        console.log('IPDATEING :: ', description, title);

        task.body = description as 'string';
        task.title = title as 'string';
        task.updatedAt = new Date().toISOString() as 'date';
      }
    });
  };
  const onBackPress = () => {
    if (description?.length && title?.length) {
      switch (formMode) {
        case FormModes.CREATE:
          createNote();
          return;
        case FormModes.EDIT:
          editNote();
          return;
      }
    }
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, [task, description, title]);

  return (
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
      <IconButton
        icon="chevron-left"
        onPress={() => {
          goBack();
          onBackPress();
        }}
      />
      <Padding height={20} />

      <Input
        placeholder="Title"
        style={{
          height: 55,
          flex: 1,
          padding: 0,
          verticalAlign: 'middle',
          backgroundColor: Colors.background,

          borderRadius: 0,
          //   fontFamily: typographyFamilies.poppinsRegular,
          fontSize: 28,
        }}
        selectionColor={Colors.dark}
        placeholderTextColor={Colors.dark}
        value={title}
        onChangeText={text => {
          setTitle(text);
        }}
      />

      <Input
        placeholder="Click To Type..."
        verticalAlign="middle"
        // textAlign="center"
        textAlignVertical="top"
        style={{
          //   flex: 1,
          height,
          //   alignItems: 'center',
          //   justifyContent: 'center',
          alignSelf: 'flex-start',
          backgroundColor: Colors.background,
          //   height: '100%',
          width: '100%',
          //   //   height: 500,
          //   //   flex: 1,
          //   padding: 0,
          //   verticalAlign: 'top',
          //   backgroundColor: Colors.aliceBlue,
          //   borderRadius: 0,
          //   //   fontFamily: typographyFamilies.poppinsRegular,
          //   fontSize: 18,
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
  );
};
export default TaskFormPage;
