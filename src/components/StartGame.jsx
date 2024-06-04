import styled from 'styled-components'


const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="Dices_image" />
      </div>
      <div className='container'>
        <h1>
          DICE GAME
        </h1>
        <Button
        onClick={toggle}
        >PLAY NOW</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
height: 100vh;
max-width: 1180px;
display: flex;
align-items: center;
margin: 0 auto;

.container{
  h1{
    font-size: 96px;
    white-space: nowrap;
  }
}
`;

const Button = styled.button`
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

`;