import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
:root{
  --primary-color:#6F011C;
  --background-color:#dfdfdf ;
  // #efefef
  --font: #3D3D3D;
  --font-obacity: #737C83;
  --font-two-obacity: #D0DBE5;
  --grean-color:#2FB182;
  --red-color:#DA2F58;
  --yallow-color:#FCBC5B;
  --blue-color:#423fe9;
} 
*{
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Cairo', sans-serif;
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