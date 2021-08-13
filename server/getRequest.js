import mongoProxy from './mongoProxy'
import { EJSON, ObjectId } from 'bson'

export default async function getRequest (_id) {
  await mongoProxy.waitFor

  return EJSON.serialize(await mongoProxy.requests.findOne({ _id: ObjectId(_id) }))
}
