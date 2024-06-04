import { useState} from "react";
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import Rules from "./Rules";
// import { Button, OutlineButton } from "../styled/Button";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(4);
    const [error, setError] = useState();
    const[showRules, setShowRules] = useState(true);

    const generateRandomNumber = (min, max) =>{
        return Math.floor(Math.random()*(max - min) + min);
    };

    const roleDice = ()=>{
        if(!selectedNumber){
            setError("You Have not selected any Number");
            return;
        }
        setError("")
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        }else{
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    }

    const resetScore = () =>{
        setScore(0);
    }
  return (
    <MainContainer>
        <div className='top_section'>

            <TotalScore score ={score}/>

            <NumberSelector
            selectedNumber = {selectedNumber}
            setSelectedNumber={setSelectedNumber}
            error = {error}
            setError = {setError}
            />
        </div>

        <RoleDice
        currentDice={currentDice}
        roleDice={roleDice}
        />

        <div className="btns">

            <button onClick={resetScore}> Reset </button>

            <button onClick = {() => setShowRules((prev) => !prev)}> {showRules ? "Hide" : "Show "} Rules </button>

        </div>

        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.div`
height: 100vh;
padding-top: 70px;
.top_section{
    display:flex;
    justify-content: space-between;
    align-items: end;
}
.btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    button{
        color: white;
        padding: 10px 18px;
        background-color: #000000;
        border-radius: 5px;
        min-width: 220px;
        border: none;
        font-size: 16px;
        border: 1px solid transparent;
        cursor: pointer;
        transition: 0.3s background ease-in;

        &:hover{
          transition: 0.3s background ease-in;
          background-color: white;
          border: 1px solid black;
          color: black;
        }
            }
}
`;