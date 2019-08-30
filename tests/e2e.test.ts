// tslint:disable-next-line:import-name
import dateformatplugin from '../src';
import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

describe('mongoose-plugin-date-format', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost:27017/dateformat', {
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

  afterAll(() => {
    return mongoose.disconnect();
  });
});
