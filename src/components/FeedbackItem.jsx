import  {useState} from 'react'
import PropTypes from "prop-types"
import Card from './shared/Card'

function FeedbackItem({item}) {

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
      <div className="text-display">{item.text}</div>      
    </Card>
  )
}

FeedbackItem.propType = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem