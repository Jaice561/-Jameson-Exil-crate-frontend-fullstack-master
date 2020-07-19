// Imports

// App Imports
import {
  RATINGS_GET_LIST_REQUEST,
  RATINGS_GET_LIST_RESPONSE,
  RATINGS_GET_LIST_FAILURE,
  RATINGS_GET_LIST_BY_USER_REQUEST,
  RATINGS_GET_LIST_BY_USER_RESPONSE,
  RATINGS_GET_LIST_BY_USER_FAILURE,
  RATINGS_GET_REQUEST,
  RATINGS_GET_RESPONSE,
  RATINGS_GET_FAILURE,
} from './actions'

// Subscriptions list

// Initial State
const ratingsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const ratings = (state = ratingsInitialState, action) => {
  switch (action.type) {
    case RATINGS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case RATINGS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case RATINGS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

// Subscriptions list by user

// Initial State
const ratingsByUserInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const ratingsByUser = (state = ratingsByUserInitialState, action) => {
  switch (action.type) {
    case RATINGS_GET_LIST_BY_USER_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case RATINGS_GET_LIST_BY_USER_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case RATINGS_GET_LIST_BY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

// Single subscription

// Initial State
const ratingInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const rating = (state = ratingInitialState, action) => {
  switch (action.type) {
    case RATINGS_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case RATINGS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case RATINGS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}