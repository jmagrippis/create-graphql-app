import gql from 'graphql-tag'

import { apolloClient } from './apolloClient'
import { Query, QueryGreetingArgs } from './types'

async function main() {
  const result = await apolloClient.query<Query, QueryGreetingArgs>({
    query: gql`
      query Greeting {
        greeting
      }
    `
  })

  if (result.loading) return

  document.getElementById('root').innerHTML = result.data.greeting
}

main()
