import {Alert} from 'react-bootstrap'
import React from 'react'
import AdvDis from './AdvatagesAndDis.jsx'
import Ground from  './Backend.jsx'
import ContainerGoods from './ContainerGoods.jsx'
import styled from "styled-components"
const Styles = styled.div`
.body{
background-color: white;}
b,h1{
color:#9c89d4;
font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
`
export default function Wirelles(){
    return (
             <>
             <Styles  style={{paddingTop:"190px"}}>
            <Ground/>
             
       <br /> <br />
<ContainerGoods value={'wirelles'}/>
<br />  <br />
<AdvDis/>
       </Styles>

             </>

    )
}




