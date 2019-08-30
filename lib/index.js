"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
function findPaths(schema) {
    return Object.keys(schema.paths).filter((path) => {
        return schema.paths[path].instance === 'Date';
    });
}
function toJSON(format, schema) {
    let transform;
    const toJSON = schema.get('toJSON');
    if (toJSON && toJSON.transform) {
        transform = toJSON.transform;
    }
    schema.set('toJSON', Object.assign(toJSON || {}, {
        transform(doc, ret) {
            const paths = findPaths(schema);
            paths.forEach((path) => {
                const date = ret[path];
                ret[path] = moment_1.default(date).format(format);
            });
            if (transform) {
                return transform(doc, ret);
            }
        },
    }));
}
function declareFormat(format) {
    return toJSON.bind(null, format);
}
exports.default = declareFormat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFHNUIsU0FBUyxTQUFTLENBQUMsTUFBVztJQUM1QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQy9DLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLE1BQWMsRUFBRSxNQUFtQjtJQUNqRCxJQUFJLFNBQVMsQ0FBQztJQUNkLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUM5QixTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztLQUM5QjtJQUdELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtRQUMvQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUc7WUFDaEIsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWhDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFZLEVBQVEsRUFBRTtnQkFDbkMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLFNBQVMsRUFBRTtnQkFDYixPQUFPLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDO0tBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsTUFBYztJQUduQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==