import Head from 'next/head'
import Image from 'next/image'
import getAll from '../server/getAll';
import Request from '../components/RequestItem';
import useSWR from 'swr';

export default function Home({ getAll }) {

  const { data: { requests } } = useSWR('/api/getAll', {
    initialData: getAll,
    refreshInterval: 1000
  })

  return (
    <section>
      <h1 className="text-lg">Requests</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>
              Date
            </th>
            <th>
              service
            </th>
            <th>
              path/operation
            </th>
            <th>
              parameters
            </th>
          </tr>
        </thead>
        <tbody>
          {
            requests.map(request => <Request key={request._id} request={request} />)
          }
        </tbody>
      </table>
    </section>
  )
}

export async function getServerSideProps (ctx) {
  return { props: {
    getAll: await getAll()
   } }
}