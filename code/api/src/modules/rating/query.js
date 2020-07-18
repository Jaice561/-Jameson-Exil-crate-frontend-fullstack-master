// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import RatingType from './types'
import { getAll, getByUser, get } from './resolvers'

// Subscriptions All
export const ratings = {
  type: new GraphQLList(RatingType),
  resolve: getAll
}

// Subscriptions by user
export const ratingsByUser = {
  type: new GraphQLList(RatingType),
  resolve: getByUser
}

// Subscription By id
export const rating = {
  type: RatingType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}