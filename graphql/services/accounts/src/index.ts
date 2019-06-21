import { ApolloServer } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
;(async () => {
  const schema = buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])

  const apolloOptions = {
    schema,
    introspection: true
  }

  const server = new ApolloServer(apolloOptions)

  const { url } = await server.listen({ port: process.env.PORT })

  console.log(`🚀 accounts server ready at ${url}`)
})()
