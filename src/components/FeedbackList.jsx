import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"

function FeedbackList({feedback}) {

    if(!feedback || feedback.lenght === 0){
        return <p> No hay feedbacks</p>
    }

  return (
    <div>
        {
            feedback.map(item => (
                <FeedbackItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}


FeedbackList.propType = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
} 

export default FeedbackList