import moment from 'moment';
import { Schema } from 'mongoose';

function findPaths(schema: any): Object[] {
  return Object.keys(schema.paths).filter((path) => {
    return schema.paths[path].instance === 'Date';
  });
}

function toJSON(format: string, schema: Schema<any>): any {
  let transform;
  const toJSON = schema.get('toJSON');
  if (toJSON && toJSON.transform) {
    transform = toJSON.transform;
  }

  // Extend toJSON options
  schema.set('toJSON', Object.assign(toJSON || {}, {
    transform(doc, ret) {
      const paths = findPaths(schema);

      paths.forEach((path: string): void => {
        const date = ret[path];
        ret[path] = moment(date).format(format);
      });

      if (transform) {
        return transform(doc, ret);
      }
    },
  }));
}

function declareFormat(format: string): (schema: Schema) => void {
  // TODO: is valid format

  return toJSON.bind(null, format);
}

export default declareFormat;
