import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>

        <h2>HOW TO PLAY DICE GAME</h2>

        <div className="text">

            <p>Select Any number</p>

            <p>Click on Dice Image</p>
            
            <p>Select Any number</p>
            
            <p>If you get wrong guess 2 point will be deducted</p>

        </div>

    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
background-color: #FBF1F1;
padding: 20px;
border-radius: 10px;
h2{
    font-size: 24px;
    font-weight: bold;
}
.text{
    margin-top: 24px;
}
`;