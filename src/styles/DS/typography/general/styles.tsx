import styled from "styled-components";
import { DS_Colors } from "../../colors";
import { DS_Spacing } from "../../spacing/index";

export const GeralStyled = styled.span `
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 0px;
    font-weight: 500;
    color:${DS_Colors.primary[200]};
    margin-top:${DS_Spacing.s3}
`;