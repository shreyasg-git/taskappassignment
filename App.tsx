import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import  from './src/pages';
import {HomePage} from './src/pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
            options={{title: 'BetterKeep'}}
          />
          {/* <Stack.Screen
            name="CreateNote"
            component={NoteFormPage}
            options={{headerShown: false}}
          /> */}
          {/* <Stack.Screen
            name="EditNote"
            component={NoteFormPage}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}

export default App;
