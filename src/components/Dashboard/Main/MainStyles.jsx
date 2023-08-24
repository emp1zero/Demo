import styled from "styled-components";

export const MainContainer=styled.div`
    grid-area: main;
    overflow-y: auto;
    background-color: black;
    padding: 20px;
    color: rgba(255,255,255,0.95);
`;
export const MainTitle=styled.div`
    display: flex;
    justify-content: space-between;
`;
export const MainCards=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 15px 0;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
       gap: 10px;
       margin-bottom: 0;
    }
`;
export const Card=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 15px;
    background-color: grey;
    border-radius: 5px;
`;
export const CardInner=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const CardIcon=styled.div`
    font-size: 25px;
   color: #1f5751;
`;
export const Charts=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 60px;
    height: 300px;
    @media screen and (max-width: 578px){
        grid-template-columns: 1fr;
        margin-top: 30px;
    }
`;
export const MainH1=styled.h1`
color: #1f5751;
`;
export const MainH3=styled.h3`
    color:#1f5751;
`;