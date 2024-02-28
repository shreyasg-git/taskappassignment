import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomePage} from './src/pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TaskFormPage} from './src/pages/TaskFormPage';
import {RealmContext} from './src/realm';

const {RealmProvider} = RealmContext;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <RealmProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{title: 'Tasks'}}
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
