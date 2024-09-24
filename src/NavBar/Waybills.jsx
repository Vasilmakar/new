import React from "react"
import {Container, Button} from 'react-bootstrap'
import styled from "styled-components"
const Styles = styled.div`
img{
padding:0px;
width: 30%;
height:100%;
object-fit: cover;
border-radius: 25px 0px 0px 25px;}
position: relative;
p{
font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
width:50%;
height:50%;}
b{
color: #5555ca;}

`
export default function Waybills(){
return (
        
          <>
      <Styles style={{height:'500px'}}>
       <Container data-aos='flip-up' className='first d-flex my-5  ' style={{width:'85%', height:'100%',background:'rgb(218, 218, 218)', borderRadius:'25px', border:'2px solid rgb(217 216 255)', padding:'0px'}}>
       <img src="https://procoatstore.com/wp-content/uploads/2021/03/procoat_03_wireless_noice_cancelling_headphone_5.jpg" />
        <div style={{width:'50%'}} className='d-flex  align-items-center justify-content-center  offset-1'>
          <div className='d-flex flex-column justify-content-around '>
            <h1><b>Waybills</b></h1>
            <p>High sound quality, which is achieved through an impressive frequency
               range and larger drivers than the in-ear and vacuum versions. ...
               These headphones are suitable for long periods of wear: they do not 
                press down and are not hot, unlike full-size headphones.</p>
               <Button style={{width:"max-content"}} variant='warning'>Go to</Button>
          </div>
         
        </div>
       </Container>
       </Styles>
             </>
        
    )
}