import styled from "styled-components";
export const LoginBox = styled.div`
img{
    position: absolute;
    width: 144.06px;
    height: 19.97px;
    left: 865px;
    top: 77.33px;
}
  }
`;
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 44px 25px;
gap: 20px;
position: absolute;
width: 369px;
height: 502px;
left: 750px;
top: 133px;
  background: var(--color-grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  input {
    box-sizing: border-box; 
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 13.0293px;
    gap: 8.14px;
    width: 324.66px;
    height: 48.5px;
    /* grey-2 */
    background: var(--color-grey-2);
    /* grey-0 */
    border: 1.2182px solid #343B41;
border-radius: 4px;
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13.0293px;
line-height: 21px;
/* grey-0 */
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16.2426px;
line-height: 26px;
color: #F8F9FA;
  }
  input:hover{
    color: #F8F9FA;
    /* grey-2 */
    background: #343B41;
    /* grey-0 */
    border: 1.2182px solid #F8F9FA;
    border-radius: 4px;
  }
  label{
    width: 31px;
    height: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;    
    color: var(--color-grey-0);
   display:flex;
   align-items: center; 
  }
  h3{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
  margin-left:70px;
    width: 170px;
    height: 18px;
    
    color: var(--color-grey-1);
  }
  h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-grey-0);
    padding-left:120px;
    }
    p {
        color: var(--color-grey-1);
      }
      @media (max-width: 480px) {
        position: absolute;
        width: 296px;
        height: 402.69px;
left: 70px;
top: 133px;
padding: 33.6911px 17.6477px;
gap: 17.65px;
input{
  box-sizing: border-box;
  width: 264.66px;
  height: 38.5px;
}   
      }
  }
`;
export const LoginButton = styled.button`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 22.3336px;
gap: 10.15px;
width: 324.66px;;
height: 48.5px;
background:  var(--color-primary);
border: 1.2182px solid #FF577F;
border-radius: 4.06066px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #FFFFFF;
@media (max-width: 480px) {
  width: 259.9px;
  height: 38.5px;.65px;
}
  }
`;
export const GoRegisterButton = styled.button`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 22.3336px;
gap: 10.15px;
width: 324.66px;;
height: 48.5px;
/* grey-1 */
background: var(--color-grey-1);
/* grey-1 */
border: 1.2182px solid var(--color-grey-1);
border-radius: 4px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12.8347px;
line-height: 21px;
color: var(--color-grey-0);
@media (max-width: 480px) {
  width: 259.9px;
  height: 38.5px;
}
  }
`;
