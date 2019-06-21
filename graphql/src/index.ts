import { ApolloServer } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'

const shouldTrackWithApolloEngine =
  process.env.NODE_ENV === 'production' && process.env.ENGINE_API_KEY
const gateway = new ApolloGateway({
  serviceList: [{ name: 'accounts', url: process.env.GRAPHQL_ACCOUNTS_URL }]
})
;(async () => {
  const { schema, executor } = await gateway.load()
  const engine = shouldTrackWithApolloEngine
    ? {
        apiKey: process.env.ENGINE_API_KEY
      }
    : undefined

  const server = new ApolloServer({
    schema,
    executor,
    engine,
    introspection: true
  })

  const { url } = await server.listen({ port: process.env.PORT })

  console.log(`🚀 graphql gateway ready at ${url}`)
})()
