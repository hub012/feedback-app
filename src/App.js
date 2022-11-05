import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData"
import {useState} from 'react'

function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Esta seguro que desea eliminar?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />

            <div className="container">

                <FeedbackList 
                    feedback = {feedback} 
                    handleDelete = {deleteFeedback}
                />

            </div>
        
        </>
    )
}

export default App;