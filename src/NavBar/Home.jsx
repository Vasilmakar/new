import React from "react"
import {Container, Button} from 'react-bootstrap'
import styled from "styled-components"
const Styles = styled.div`
img{
padding:0px;
width: 50%;
height:100%;
object-fit: cover;
border-radius: 0px 25px 25px 0px;}
position: relative;
p{
font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
height:50%;
width:50%;}
b{
color: #5555ca;}}

`


export default function Wireless(){


    return(
      <>
      <Styles style={{height:'100%'}}>
       <Container data-aos='flip-up'  className='first d-flex ' style={{width:'85%', height:'100%',background:'rgb(218, 218, 218)', borderRadius:'25px', border:'2px solid rgb(217 216 255)', padding:'0px'}}>
        <div style={{width:'50%'}} className='d-flex  align-items-center justify-content-center  offset-1'>
          <div className='d-flex flex-column justify-content-around '>
            <h1><b>Wireless</b></h1>
            <p>The main advantage of wireless headphones is the complete absence of cords,
               which provides absolute freedom of movement and eliminates the need to untangle
                the wires every time you take the headphones out of your pocket. Mobility and portability.
                 The perfect compactness of the TWS headset provides an increased level of mobility.</p>
               <Button style={{width:"max-content"}} variant='warning'>Go to</Button>
          </div>
         
        </div>
        <img src="https://www.impactstrategy.ai/media/post/b53b3a3d6ab90ce0268229151c9bde11/b53b3a3d6ab90ce0268229151c9bde11.jpg" />
       </Container>
       </Styles>
             </>
    )
}