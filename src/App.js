import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App(){
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackItem item={{rating: 10, text:'Lo mejor del mundo!'}} />
            </div>
        
        </>
    )
}

export default App;