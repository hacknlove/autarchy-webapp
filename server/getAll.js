import mongoProxy from './mongoProxy'
import { EJSON } from 'bson'

function toArrayserialize (array) {
  return array.map(EJSON.serialize)
}

export default async function getAll () {
  await mongoProxy.waitFor

  const logs = mongoProxy.logs.find().sort({ _id: -1 }).toArray().then(toArrayserialize);
  const requests = mongoProxy.requests.find().sort({ _id: -1 }).limit(50).toArray().then(toArrayserialize);
  const services = mongoProxy.services.find().toArray().then(toArrayserialize);

  return {
    logs: await logs,
    requests: await requests,
    services: await services
  }
}