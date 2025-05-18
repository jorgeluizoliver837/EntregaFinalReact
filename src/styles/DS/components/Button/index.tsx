import { ButtonTypography } from "../../typography/button";
import { Container } from "./styles.ts";


export function DS_Button({texto}:{texto:string}){

return (
    <Container >

    

        <ButtonTypography>{texto} POSTS</ButtonTypography>

 

    </Container>
)
}
export default DS_Button;