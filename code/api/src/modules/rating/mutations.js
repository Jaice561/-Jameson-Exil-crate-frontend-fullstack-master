// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import RatingType from './types'
import { create, remove } from './resolvers'

// Rating create
export const ratingCreate = {
  type: RatingType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Subscription remove
export const ratingRemove = {
  type: RatingType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}