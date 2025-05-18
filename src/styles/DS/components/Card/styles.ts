import styled from "styled-components";

import { DS_Colors } from "../../colors";

export const CardContainer = styled.div`
    display: flex;
    width:368px;
    height:529px;
    border-radius: 25px;
    background-color: ${DS_Colors.black[75]};
    box-shadow: 10px 10px 50px;
    text-align: center;


    img{
    width:368px;
    height:265px;
    border-radius: 25px 24px 0px 0px;
 
    }

`;