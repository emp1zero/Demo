import styled from "styled-components"

export const ButtonContainer=styled.div`
margin-top: 10px;
    width: 100%;
    align-items: center;
    justify-items: center;
`
export const Button= styled.button`
  background:#1bf757;
    padding: 10px 0;
    border: none;
    width: 100%;
    border-radius: 4px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
`;
export const DashboardContainer=styled.div`
  display:grid;
  background-color: #000;
  grid-template-columns: 186px 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas: 
  'Sidebar header header header'
  'Sidebar main main main';
  height: 100vh;
  @media screen and (max-width:992px){
    grid-template-columns:1fr;
    grid-template-rows:0.2fr 3fr;
    grid-template-areas:
    'header'
    'main';
  }
  ;
`;