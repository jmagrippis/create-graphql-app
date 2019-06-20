import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Text, View, StyleSheet } from 'react-native'

import { Query as QueryType, QueryGreetingArgs } from '../types'

const GREETING_QUERY = gql`
  query Greeting {
    greeting
  }
`

class GreetingQuery extends Query<QueryType, QueryGreetingArgs> {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

export const Greeting = () => (
  <View style={styles.container}>
    <GreetingQuery query={GREETING_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Text>loading...</Text>
        if (error || !data) return <Text>error fetching greeting!</Text>

        const { greeting } = data

        return <Text>{greeting}</Text>
      }}
    </GreetingQuery>
  </View>
)
