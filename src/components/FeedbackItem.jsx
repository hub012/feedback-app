import PropTypes from "prop-types"
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item, handleDelete}) {

 /* const [rating, setRating] = useState(7)
  const [text, setText] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, euios.')
  
  const handleClick = () =>{
    setRating((prev) =>{
      return prev + 1
    })
  }*/

  /**
   * <button onClick={handleClick} className=''>Click</button>*/

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=> handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>      
    </Card>
  )
}

FeedbackItem.propType = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem