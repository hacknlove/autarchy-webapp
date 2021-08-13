import Head from "next/head"

export default function Graphql ({ request, response }) {

  return (
    <>
    <Head>
      <title>{request.graphql.operationName} - request.graphql.query</title>
    </Head>
      <h2>
         {request.graphql.operationName}
      </h2>
      <h3>Query:</h3>
      <code>
        <pre>
          {
            request.graphql.query
          }
        </pre>
      </code>
      <h3>Variables</h3>
      <code>
        <pre>
          {
            JSON.stringify(request.graphql.variables, null, 4)
          }
        </pre>
      </code>
      <h3>Response</h3>
      <code>
        <pre>
          {
            JSON.stringify(response, null, 4)
          }
        </pre>
      </code>
    </>
  )
}