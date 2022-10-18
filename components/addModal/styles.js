import styled from "styled-components";

export const ModalBox = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBoxContent = styled.span`
  display: flex;
  flex-direction: column;
justify-content:flex-start ;
  gap: 10px;
  width: 369px;
  height: 370px;
  
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
export const ModalBoxHeader = styled.header`
 display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 12px 20px;
gap: 10px;
width: 370px;
height: 50px;
background: #343B41;
border-radius: 4px 4px 0px 0px;
  i {
    cursor: pointer;
  }
  h3{
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
color: #F8F9FA;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:center ;
  gap: 35px;
 
  width: 369px;
  height: 350px;
  
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  input {
    box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 16.2426px;
gap: 10.15px;
width: 329.93px;
height: 48px;
background: #343B41;
border: 1.2182px solid #F8F9FA;
border-radius: 4px;
margin-left:20px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16.2426px;
line-height: 26px;


color: #F8F9FA;
  }
  select {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #f8f9fa;

    box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 16.2426px;
gap: 10.15px;
width: 329.93px;
height: 48px;
background: #343B41;
border: 1.2182px solid #F8F9FA;
border-radius: 4px;
margin-left:20px;
  }
  button {
    box-sizing: border-box;

    margin-left:20px;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 22.3336px;
gap: 10.15px;

width: 324px;
height: 48px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
margin-left:23px;
color: #FFFFFF;


background: #FF577F;


border: 1.2182px solid #FF577F;
border-radius: 4.06066px;


  }
  h2 {
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12.182px;
line-height: 0px;

margin-left:25px;
color: #F8F9FA;


  }
`;
