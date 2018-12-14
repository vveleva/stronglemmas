import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-client-preset'
import { createHttpLink } from 'apollo-link-http'
import { getHostname } from '../util/hostname'

const httpLink = createHttpLink({
  uri: `${getHostname()}/graphql`,
  credentials: 'same-origin',
  headers: {
    'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content,
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default client
