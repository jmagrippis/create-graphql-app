import { ApolloServer } from 'apollo-server'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

const shouldTrackWithApolloEngine =
  process.env.NODE_ENV === 'production' && process.env.ENGINE_API_KEY
;(async () => {
  const engine = shouldTrackWithApolloEngine
    ? {
        apiKey: process.env.ENGINE_API_KEY
      }
    : undefined

  const apolloOptions = {
    typeDefs,
    resolvers,
    engine,
    introspection: true
  }

  const server = new ApolloServer(apolloOptions)

  const { url } = await server.listen({ port: process.env.PORT })

  console.log(`🚀 graphql server ready at ${url}`)
})()
