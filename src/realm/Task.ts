// import {Realm} from '../../node_modules/@realm/react/dist/index';
import {BSON} from 'realm/dist/public-types/bson';
import {ObjectSchema} from 'realm/dist/public-types/schema';
import Realm from 'realm';
// Define your object model
export class Task extends Realm.Object<Task> {
  _id!: BSON.ObjectId;
  title!: string;
  due_date!: 'date';
  description?: 'string';
  completed!: 'bool';

  static schema: ObjectSchema = {
    name: 'Task',
    properties: {
      _id: 'objectId',
      title: {type: 'string', indexed: 'full-text'},
      due_date: {type: 'date'},
      description: {type: 'string'},
      completed: {type: 'bool', default: () => false},
    },
    primaryKey: '_id',
  };
}
