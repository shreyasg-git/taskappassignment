import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {Task} from './Task';

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Task],
  deleteRealmIfMigrationNeeded: true,
};

// Create a realm context
const RealmContext = createRealmContext(realmConfig);

export {RealmContext, Task};
