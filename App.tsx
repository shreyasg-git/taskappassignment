import React from 'react';
import {Text} from 'react-native';

// import {HomePage, NoteFormPage} from './src/pages';

import {RealmContext} from './src/realm';

const {RealmProvider} = RealmContext;

function App(): JSX.Element {
  return (
    <RealmProvider>
      <Text>HELOOO</Text>
    </RealmProvider>
  );
}

export default App;
