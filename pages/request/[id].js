import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import getRequest from "../../server/getRequest";

import Rest from '../../components/RequestView/Rest'
import Graphql from '../../components/RequestView/Graphql'


export default function Request ({ request }) {
  
  const Handler = request.request.graphql ? Graphql : Rest

  const start = request.start?.$date ? formatDistanceToNow(new Date(request.start.$date)) : ''
  const end = request.end?.$date ? formatDistanceToNow(new Date(request.start.$date)) : ''
  
  return (
    <section>
      <h1>
        {request.service} 
      </h1>
      <Handler {...request} start={start} end={end}/>
    </section>
  )
} 

export async function getServerSideProps (ctx) {
  const request = await getRequest(ctx.query.id)

  return {
    props: { request }
  }
} 