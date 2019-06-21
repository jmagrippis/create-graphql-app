import { me, users } from './me'

export const resolvers = {
  Query: {
    me
  },
  User: {
    __resolveReference({ id }) {
      return users.find((user) => user.id === id)
    }
  }
}
