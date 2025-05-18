import { createGlobalStyle } from "styled-components";
import { DS_Colors } from "./DS/colors";


export const GlobalStyles = createGlobalStyle`
*{
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: 'Roboto', 'sans-serif';
--webkit-front-smoothing: 'antialiased'


}

body{
    height: 100vh;
}
:root{
    --primary: ${DS_Colors.primary[900]}
}
`