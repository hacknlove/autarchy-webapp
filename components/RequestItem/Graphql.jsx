
export default function Graphql (props) {
  return (
    <>
      <td>
        {props.start}
      </td>
      <td>
        {props.service}
      </td>
      <td>
        {props.request.body?.operationName}
      </td>
      <td>
        {Object.entries(props.request.body.variables ?? {}).map(([key, value]) => `${key}=${String(value)}`).join(',')}
      </td>
    </>
  )
}