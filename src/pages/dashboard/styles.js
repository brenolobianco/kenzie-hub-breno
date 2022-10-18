import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";
export const Header = styled.header`
width: 100vw;
height: 88px;
display:flex;
justify-content: center;
gap:650px;
align-items: center;
background: #121214;
@media (max-width: 480px) {
  width:390px;
  gap:208px;
  margin-left:20px;
 
img{  
width: 122.06px;
height: 21.21px;
  }
`;
export const ButtonLogout = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 16.2426px;
gap: 10.15px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 28px;
text-align: center;
color: #F8F9FA;
width: 55.49px;
height: 32px;
background: #212529;
border-radius: 4px; 
`;
export const PersonalInfoBox = styled.div`
height: 118px;
width: 100vw;

border:1px solid  #212529;
display:flex;
justify-content: center;
gap:460px;
align-items: center;
@media (max-width: 480px) {
  width: 450px;
  gap:18px;
  height: 131px;
  display:flex;
  flex-direction:column;
  align-items: flex-start;
  padding-left:20px;
}
h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #F8F9FA;
}
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868E96;
}
  
`;
export const MainContent = styled.main`
 width:100vw ;
 height:900px ;
 display:flex ;
flex-direction:column ;
justify-content:flex-start;
align-items:center ;
`;
export const ListContentBox = styled.ul`
  padding-top:25px;
  width: 850px;
height: 416px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: flex-start;
  background: #212529;
  border-radius: 4px;
  margin-bottom:20px;
  overflow-y:auto;
 

  @media (max-width: 480px) {
 
position: absolute;
width: 426px;
height: 456.37px;
left: 8px;
top: 276px;
background: #212529;
border-radius: 4px;
  }
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  h5 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`
export const Techs = styled.div`
width: 850px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  margin-top:15px;


  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }
button{
  color:white ;
}
@media (max-width: 480px) {
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 254px;
position: absolute;
width: 294.2px;
height: 32px;
left: 55px;
top: 223px;

  }
`;


export const ListCard = styled.li`

  margin-left: 30px;
  width: 792px;
height: 49px;
  display: flex;
  background: #121214;
  border-radius: 4px;
  justify-content: space-between;
  padding:20px;
  align-items: center;
  &:hover
{
  background: #343B41;
border-radius: 4px
}

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;
    color: #ffffff;
  }
  
  @media (max-width: 480px) {
width:380px;
  }
`;



export const CardRightSide = styled.div`

display:flex ;
gap:5px;
align-items: center;
p { 
   width: 96.49px;
   height: 22.33px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12.182px;
   line-height: 22px;
 
   color: #868E96;
     }
     i{
       color:white;
       cursor: pointer;
     }


`;



