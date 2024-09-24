import { Container, Alert } from "react-bootstrap";
import Back from  "./Back.jsx";
import ContainerGoods from "../Wirelles/ContainerGoods.jsx";
import styled from "styled-components";
const Styles = styled.div`
.body{
background-color: white;
}
i,h1{
color:#9c89d4;
font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
`
export default function Wired(){
    return (
        <Styles style={{paddingTop:"130px"}}>
        {/* <div className="body mt-5 mb-5 "> */}
        <Container  fluid className=" mt-5 mb-5 d-flex justify-content-center " >
       <Back style={{ position:'absolute', zIndex:'-1'}}/>
       
       </Container>
        {/* </div> */}

<ContainerGoods value={'wire'}/>
           
        </Styles>
    )
}