import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomePage} from './src/pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TaskFormPage} from './src/pages/TaskFormPage';
import {RealmContext, Task} from './src/realm';
import Icon from './src/ui/Icon';
import IconButton from './src/ui/IconButton';

const {RealmProvider} = RealmContext;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <RealmProvider schema={[Task]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              title: 'Tasks',
              // headerRight: () => {
              //   return (
              //     <IconButton icon="chevron-down" iconColor="#000" onPress={} />
              //   );
              // },
            }}
          />
          <Stack.Screen
            name="CreateTask"
            component={TaskFormPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditTask"
            component={TaskFormPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}

export default App;
