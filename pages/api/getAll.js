import getAll from "../../server/getAll";

export default async function getAllAPIEndpoint (req, res) {
  res.json(await getAll())
}