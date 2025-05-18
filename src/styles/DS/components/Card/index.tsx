


import { GeneralTypography } from "../../typography/general/index.tsx";
import { H3Typography } from "../../typography/h3/index.tsx";
import DS_Button from "../Button/index.tsx";
import { CardContainer } from "./styles.ts";

export default function DS_Card({imgpath,user,descr,texto}:{imgpath:string,user:String,descr:String,texto:string}){return(

    <CardContainer className="card">
    <div className="container">
    <img src={imgpath} alt="thumb" />
    <H3Typography>{user}</H3Typography>
  
    <GeneralTypography>{descr}</GeneralTypography>
    <div >
    <DS_Button texto={texto}/>
    </div>
     
  
  </div>

 
</CardContainer>

)      
}