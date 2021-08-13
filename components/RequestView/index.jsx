import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Link from 'next/link'

import Rest from './Rest'
import Graphql from './Graphql'
import Raw from './Raw'

const types = {
  REST: Rest,
  graphql: Graphql
} 

export default function Request ({ request }) {
  const start = formatDistanceToNow(new Date(request.start.$date))

  const Handler = types[request.type] ?? Raw

  return (
    <Link href={`/request/${request._id.$oid}`}>
      <tr className="clickable">
        <Handler {...request} start={start} />
      </tr>
    </Link>
  )
}