// tslint:disable-next-line:import-name
import dateformatplugin from '../src';
import mongoose, { Schema } from 'mongoose';
import moment from 'moment';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('mongoose-plugin-date-format', () => {
  let mongod;

  beforeAll(async () => {
    mongod = new MongoMemoryServer();
    const uri = await mongod.getConnectionString();

    return mongoose.connect(uri, {
      useNewUrlParser: true,
    });
  });

  test('convert the date to a specific format', async () => {
    const personSchema = new Schema({ name: String, birthdate: Date });
    const dateFormat = 'YYYY';
    const birthdate = moment();
    personSchema.plugin(dateformatplugin(dateFormat));
    const personModel = mongoose.model('people', personSchema, 'people');

    const john = {
      birthdate,
      name: 'John Doe',
    };

    const person = await personModel.create(john);
    expect(person.get('birthdate')).toBeInstanceOf(Date);
    expect(person.toJSON().birthdate).toEqual(birthdate.format(dateFormat));
  });

  afterAll(async () => {
    mongoose.disconnect();
    await mongod.stop();
  });
});
