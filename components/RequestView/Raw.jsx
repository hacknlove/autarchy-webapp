export default function Graphql (props) {
  return (
    <pre>
      {JSON.stringify(props, null, 4)}
    </pre>
  )
}