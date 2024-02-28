import React from 'react';
import Realm from 'realm';
import {FlatList, TouchableOpacity, View} from 'react-native';
// import RealmPlugin from 'realm-flipper-plugin-device';
import {Colors} from '../consts';
import {RealmContext, Task} from '../realm';
import Typography from '../ui/typography/Typography';
import {NoteDisplay} from '../components/NoteDisplay';
// import Icon from '../ui/Icon';
import FAB from '../components/FAB';
import {useNavigation} from '@react-navigation/native';
const {useRealm, useQuery} = RealmContext;

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = ({}) => {
  // const [allNotes, setAllNotes] = useState<Realm.Results<Note>>();
  const {navigate} = useNavigation();
  const tasks = useQuery(Task);
  const realm = useRealm();

  const createTask = () => {
    realm.write(() => {
      realm.create('Task', {
        _id: new Realm.BSON.ObjectId(),
        title: `First Task ${Math.floor(Math.random() * 100 + 1)}`,
        description: '1st Task Body',
        due_date: new Date(),
      });
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View style={{padding: 10}}>
        <Typography typography="H5SemiBoldDarkGrey">
          Total Tasks : {tasks?.length}
        </Typography>
        <TouchableOpacity onPress={createTask}>
          <Typography typography="H5SemiBoldDarkGrey">CREATE NOTE</Typography>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={props => {
          return <NoteDisplay task={props.item} />;
        }}
        keyExtractor={props => {
          return props._id.toString();
        }}
      />

      {/* <Icon name="plus" size={50} color={Colors.primaryYellow} /> */}
      <FAB
        iconName="plus"
        onPress={() => {
          console.log('AAAAAAAAAAAAAA NO:OP');
          navigate('CreateNote', {});
        }}
      />
    </View>
  );
};
export default HomePage;
