import React, {useState} from 'react';
import Realm from 'realm';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Colors} from '../consts';
import {RealmContext, Task} from '../realm';
import Typography from '../ui/typography/Typography';
import {TaskDisplay} from '../components/TaskDisplay';
import FAB from '../components/FAB';
import {useNavigation} from '@react-navigation/native';
import DropDown from '../components/Dropdown';
const {useRealm, useQuery} = RealmContext;

type HomePageProps = {};

const DROPDOWN_OPTIONS: Array<{label: string; value: string}> = [
  {label: 'Due Date', value: 'due_date'},
  {label: 'Completion Status', value: 'completion'},
];

const HomePage: React.FC<HomePageProps> = ({}) => {
  const [sortBy, setSortBy] = useState(DROPDOWN_OPTIONS[0]);
  const {navigate} = useNavigation();

  const tasks = useQuery(Task);
  const tasksByCompletion = useQuery(Task, tasks => {
    return tasks.sorted('completed', true);
  });
  const tasksByDueDate = useQuery(Task, tasks => {
    return tasks.sorted('due_date', true);
  });

  const realm = useRealm();
  const incomplete = useQuery(Task, tasks => {
    return tasks.filtered('completed == false');
  });

  // const createTask = () => {
  //   realm.write(() => {
  //     realm.create('Task', {
  //       _id: new Realm.BSON.ObjectId(),
  //       title: `First Task ${Math.floor(Math.random() * 100 + 1)}`,
  //       description: '1st Task Body',
  //       due_date: new Date(),
  //     });
  //   });
  // };

  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View
        style={{
          padding: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Typography typography="H5SemiBoldDarkGrey">
          Total Tasks : {tasks?.length}
        </Typography>
        <Typography typography="H5SemiBoldDarkGrey">
          Pending Tasks : {incomplete?.length}
        </Typography>
        {/* <TouchableOpacity onPress={createTask}>
          <Typography typography="H5SemiBoldDarkGrey">CREATE Task</Typography>
        </TouchableOpacity> */}
      </View>
      <DropDown
        options={DROPDOWN_OPTIONS}
        selected={sortBy}
        setSelected={setSortBy}
      />

      <FlatList
        data={
          sortBy.value === 'completion' ? tasksByCompletion : tasksByDueDate
        }
        renderItem={props => {
          return <TaskDisplay task={props.item} />;
        }}
        keyExtractor={props => {
          return props._id.toString();
        }}
      />

      <FAB
        iconName="plus"
        onPress={() => {
          console.log('AAAAAAAAAAAAAA NO:OP');
          // @ts-ignore
          navigate('CreateTask', {});
        }}
      />
    </View>
  );
};
export default HomePage;
