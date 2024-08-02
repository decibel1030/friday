import { useEffect, useState } from "react";
import fridayImage from "./source/friday.jpg"
import "./source/style.css"

function App() {
  const [isFriday, setFriday] = useState(false)
  
  useEffect(()=>{
    const today = new Date().getDay();
    if(today === 5){
      setFriday(true)
    }
    else{
      setFriday(false)
    }
  })

  const showMeme = () =>{
    if(isFriday){
      document.title = "it's Friday"
      return <img src={fridayImage}/>
    }
    else{
      document.title = "it's not Friday"
      return <h1>Today is not friday!</h1>
    }
  }
  return (
    <div className="App">
      {showMeme()}
    </div>
  );
}

export default App;
