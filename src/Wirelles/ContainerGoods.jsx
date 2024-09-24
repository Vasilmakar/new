import {Card, Container, Button, Row} from 'react-bootstrap'
import ProductArray from '../Products/Products'
import React from 'react'
import addCartArray from '../OurFunction'
import styled from 'styled-components'
const Styles = styled.div`
h1{
color:#9c89d4;
font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;}

`


export default function ContainerGoods({value}){

const [productIncart, setProductIncart] = React.useState([])
const addToCart = (e) =>{
    console.log(e.target.id)
 
    const added = {
        id: e.target.id,
        name: e.target.name,
        price: e.target.value,
        image: e.target.children[0].attributes.src.nodeValue,
        key: e.target.newkey,
        quantity: 0,
        total: 0
    }

        addCartArray.push(added)
}
    // addCartArray.push(added)
    // addCartArray.map((ele)=>{
    //     if(e.target.id === ele.id ){
    //         addCartArray.shift(ele)
    //     }
    // })
  
    // console.dir(e.target.__reactProps$wcycjr11b6.newkey)



    return (

        <>
        <Styles>
        
             <Container fluid className='mt-5 d-flex flex-column ' style={{width:'75%'}} data-aos='zoom-out'>
                <div>
                <h1 className='mt-4 offset-1 ' >Available</h1>
                </div>
                <Row className=' d-flex justify-content-around align-items-center'>
            {ProductArray.map((e, idx)=>
            { 
                if(e.key === `${value}`){
                return (   
                <Card className='d-flex align-items-center ' key={e.id} style={{borderRadius:'25px',maxWidth: '270px', margin:'10px', height:'350px'}}>
                    <Card.Img variant="top" src={e.image} style={{height:'200px', width:'200px', marginTop:'10px'}} />
                    <Card.Body style={{color:"rgb(27 49 145)"}} className='align-self-start'>
                        <Card.Title>{e.name}</Card.Title>
                        <Card.Text>
                            ${e.price}.00
                        </Card.Text>
                        <Button id={idx}  name={e.name} value={e.price}  newkey={idx}   variant="outline-primary" onClick={addToCart} > <img src={e.image} hidden/>Add to card</Button>
                    </Card.Body>
                </Card>
                
            )}})}
            </Row>
             </Container>
             </Styles>
        </>
    )
}