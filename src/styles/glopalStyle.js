import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
:root{
  --primary-color:#6F011C;
  --background-color:  #e9e7e7;
  --font: #3D3D3D;
  --font-obacity: #737C83;
  --font-two-obacity: #D0DBE5;
  --grean-color:#2FB182;
  --red-color:#DA2F58;
  --yallow-color:#FCBC5B;
} 
*{
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}
body{
  background-color: var(--background-color);
  
    
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}


`

export default GlopalStyle