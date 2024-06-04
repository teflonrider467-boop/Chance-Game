import styled from "styled-components";

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

const OutlineButton = styled(Button)`
border: 1px solid black;
background-color: white;
color: black;
&:hover{
  transition: 0.3s background ease-in;
  background-color: black;
  border: 1px solid transparent;
  color: white;
}
`;

export default Button;