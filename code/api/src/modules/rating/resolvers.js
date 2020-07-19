// App Imports
import models from '../../setup/models'

// Get subscription by ID
export async function get(parentValue, { id }) {
  return await models.Rating.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Get Rating by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Rating.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.User, as: 'user'},
        {model: models.Crate, as: 'crate'},
      ]
    })
  } else {
    throw new Error('Please login to view your ratings.')
  }
}

// Get all subscriptions
export async function getAll() {
  return await models.Rating.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Create Rating
export async function create(parentValue, { crateId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    const check = await models.Rating.findOne({
      where: { crateId: crateId,userId: auth.user.id }
    })
    if(check === null) {
      return await models.Rating.create({
        crateId,
        userId: auth.user.id
      })
    } else {
      throw new Error('You are already add a rating.')
    }
  } else {
    throw new Error('Please login to rate to this crate.')
  }
}

// Delete subscription
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Rating.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Access denied.')
  }
}