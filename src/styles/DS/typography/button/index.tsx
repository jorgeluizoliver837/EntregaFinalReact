import type { PropsWithChildren } from 'react';
import { ButtonStyled } from './styles';


export const ButtonTypography = ({children}: PropsWithChildren) => {
    
    return <ButtonStyled>{children}</ButtonStyled>

}