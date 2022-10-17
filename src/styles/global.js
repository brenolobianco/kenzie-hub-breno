import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  :root {
    --color-background: #121214;
    --color-primary:  #FF577F;
    ;
    --color-primary-Focus: #FF427F;
    --color-primary-Negative:#59323F;
     --color-grey-4:#121214;
     --color-grey-3:#212529;
     --color-grey-2:#343B41;
     --color-grey-1:#868E96;
     --color-grey-0:#F8F9FA;
     --color-primary-Disable:#59323F;
     --color-primary-button #FF577F;
     --color-primary-50:#FF427F;
    --color-success: #3FE864;
    --color-negative: #FBEA85;
    --color-error: #E83F5B;
  }
  @media (min-width: 700px) {
    :root {
       font-size: 62.5%;
    }
  }
  * {
     margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Inter';
  }
  button {
    cursor: pointer;
  }
  `;
