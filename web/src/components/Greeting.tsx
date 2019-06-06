import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import { Query as QueryType, QueryGreetingArgs } from '../types'

const GREETING_QUERY = gql`
  query Greeting {
    greeting
  }
`

class GreetingQuery extends Query<QueryType, QueryGreetingArgs> {}

export const Greeting = () => (
  <GreetingQuery query={GREETING_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return 'loading...'
      if (error) return 'error fetching greeting!'

      const { greeting } = data

      return greeting
    }}
  </GreetingQuery>
)
