import StartGame from "./components/StartGame";
import { useState} from "react"
import "./App.css";
import GamePlay from "./components/GamePlay";


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted(prev =>(!prev));
  }

  return (
    <div>
      {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay}/>}
    </div>
  );
}

export default App
