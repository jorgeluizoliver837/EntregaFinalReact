import styled from "styled-components";

import { DS_Colors } from "../../colors";
import { DS_Spacing } from "../../../DS/spacing/index";


export const Container = styled.button`


    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:320px;
    height:40px;
    border-radius: 25px;
    background-color: ${DS_Colors.black[15]};
    border-color: ${DS_Colors.primary[200]};
    border-width: 2px;
    margin: auto;
    margin-top:${DS_Spacing.s3};


`;