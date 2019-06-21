import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Text, View, StyleSheet } from 'react-native'

import { Query as QueryType } from '../types'

const ME_QUERY = gql`
  query Me {
    me {
      email
    }
  }
`

class GreetingQuery extends Query<QueryType> {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

export const Greeting = () => (
  <View style={styles.container}>
    <GreetingQuery query={ME_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Text>loading...</Text>
        if (error || !data) return <Text>error fetching greeting!</Text>

        const { me } = data

        return <Text>Hello, {me ? me.email : 'world'}!</Text>
      }}
    </GreetingQuery>
  </View>
)
