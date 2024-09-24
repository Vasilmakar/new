import {Container, Button} from 'react-bootstrap'
import React from 'react'
import styled from "styled-components"
const Styles = styled.div`
img{


width: 350px;
height:350px;
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
color: #5555ca;}

`
 function Budge(){

    return (
        <>
     <Styles style={{height:'500px'}}>
       <Container data-aos='flip-up' className='first d-flex my-5  ' style={{width:'85%', height:'100%',background:'rgb(218, 218, 218)', borderRadius:'25px', border:'2px solid rgb(217 216 255)', padding:'0px'}}>
        <div style={{width:'50%'}} className='d-flex  align-items-center justify-content-center  offset-1'>
          <div className='d-flex flex-column justify-content-around '>
            <h1><b>JBL Tune 670NC White headphones</b></h1>
            <p>The JBL Tune 670NC Wireless Headphones with Adaptive Noise Cancellation feature JBL Pure Bass Sound
               and work up to 70 hours without recharging. The headphones are made of lightweight materials
                and fold up very easily and compactly. Customize the sound and features to your liking with
                 the with the free JBL Headphones app.
                                          </p>
                                           </div>
                                       <div style={{width:'200px'}} className='mx-3 text-center'>
               <Button style={{width:"max-content"}} variant='warning'>Go to</Button>
          </div>
         
        </div>
        <img className='mt-6' src="https://cdn.comfy.ua/media/catalog/product/cache/5/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/j/b/jbl_tune_700bt_blue_jblt700btblu_7.jpg" style={{width:"50%", height:"100%"}} />
       </Container>
       </Styles>
          </>
    )
}
export default Budge