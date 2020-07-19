import React, { PureComponent,useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


// App Imports
import { messageShow, messageHide } from '../common/api/actions'
import { remove, getListByUser } from '../rating/api/actions'
import {FaStar} from 'react-icons/fa'

// Component
  const Rating = () => {
    const [rating,setRating] = useState(null)
    const [hover,setHover] = useState(null)
    return (
<div>
  {[...Array(5)].map((star,i) =>{
    const ratingVal = i+1
    return(
    <label>
      <input type="radio"
             name="rating"
             value={ratingVal}
             style={{display:"none"}}
             onClick={() => setRating(ratingVal)}/>
    <FaStar
        className="star"
        color={ratingVal <= (hover || rating) ?"#ffc107":"#e4e5e9"}
        size={20}
        onMouseEnter={() => setHover(ratingVal)}
        onMouseLeave={() => setHover(null)}
    />
    </label>
    )})}
</div>
    )
  }

// Component Properties
Rating.propTypes = {
  rating: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  getListByUser: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function itemState(state) {
  return {
    user: state.user
  }
}

export default connect(itemState, { remove, getListByUser, messageShow, messageHide })(withRouter(Rating))