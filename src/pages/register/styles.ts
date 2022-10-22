import styled from "styled-components";
export const RegisterBox = styled.div`
width:100vw ;
margin-top:70px;
display:flex ;
justify-content:center ;
align-items:center ;
flex-direction: column ;

  img {
   
    width: 144.06px;
    height: 19.97px;
  
 
    @media (max-width: 480px) {
      left: 78px;
      top: 83px;
    } }
`;
export const FormLogo = styled.div`

display:flex ;
width: 386px;
justify-content:space-between ;
align-items:center ;
margin-bottom:30px;


`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 42px 32px;
  gap: 22px;
 
  width: 386px;
  height: 1091.19px;
 
  background: var(--color-grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  @media (max-width: 480px) {
    position: absolute;
    width: 296px;
    height: 852.69px;
    left: 70px;
    top: 133px;
    padding: 33.6911px 17.6477px;
    gap: 17.65px;
  }

  input,
  select {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 329.93px;
    height: 48px;
    background: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
  }
  @media (max-width: 480px) {
    input {
      width: 263.79px;
      height: 42.38px;
    }
  }
  input:hover {
    color: #f8f9fa;

    background: #343b41;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: var(--color-grey-0);
  }
  p {
    color: #f8f9fa;
  }
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    padding-left: 100px;

    color: var(--color-grey-0);
    @media (max-width: 480px) {
      padding-left: 68px;
    }
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-grey-1);
  }
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-grey-1);
    padding-left: 81px;
  }
`;
export const BackButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16.2426px;
  gap: 10.15px;
  color: #f8f9fa;
  
  width: 67.49px;
  height: 40.11px;
  
  background: var(--color-grey-3);
  border-radius: 4px;
  @media (max-width: 480px) {
    left: 290px;
    top: 68px;
  }
`;
export const RegisterButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 326px;
  height: 48px;
  background: #59323f;
  border: 1.2182px solid #59323f;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12.7925px;
  line-height: 21px;
  color: #ffffff;
  @media (max-width: 480px) {
    width: 260.65px;
    height: 38.38px;
  }
`;
