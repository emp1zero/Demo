import styled from "styled-components";
import {Link as LinkI} from 'react-router-dom'

export const SideBarContainer=styled.aside`
    grid-area: sidebar;
    position: absolute;
    height: 100%;
    background-color: #1f5751;
    overflow-y: auto;
    transition: all 0.5s;
   
    @media screen and (max-width:992px)
    {
        opacity:${({isOpen})=>(isOpen?'100%':'0')};
        top:${({isOpen})=>(isOpen?'0':'-100%')};
        z-index: 999;
        position: absolute;
        height: 100%;
        background-color: #1f5751;
        overflow-y: auto;
        transition: all 0.5s;
    }

`
export const SideBarTitle=styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 15px 30px 0 30px;
    margin-bottom: 30px;
`;
export const SideBarBrand=styled.div`
    margin-top: 15px;
    font-size: 20px;
    font-weight: 700;
`;
export const Iconstyles=styled.div`
    font-size: 20px;
    color: #fff;
    margin-right: 10px;
    line-height: 2px;
`;
export const IconHeader=styled.div`
    vertical-align: middle;
    line-height: 1px;
    font-size: 26px;
    color: #fff;
    margin-right: 5px;
`;


export const IconClose=styled.span`
display: none;
@media screen and (max-width:992px)
{
    display: block;
 position: absolute;
top: 55px;
left: 150px;
cursor: pointer; 
color: #fff;
}
`;
export const SideBarList=styled.ul`
display: flex;
padding: 0;
flex-direction: column;

`;
export const SideBarItems=styled(LinkI)`
    display: flex;
    text-decoration: none;
    color: #fff;
    padding:20px; 
    &:hover{
        background-color: #9e9ea4;
    }
`;
export const SideBarHeaderColor=styled(LinkI)`
    display: flex;
    text-decoration: none;
    color: #fff;
    padding:20px; 
`;
