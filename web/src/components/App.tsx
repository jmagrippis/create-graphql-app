import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

import { apolloClient } from '../apolloClient'
import { Greeting } from './Greeting'

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <Greeting />
  </ApolloProvider>
)
