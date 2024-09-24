
import {Button, Form, Row, Card, Col, Container} from 'react-bootstrap'
import CardArray from './CardArray'
import addCartArray from '../OurFunction'
import styled from 'styled-components'
const Styles = styled.div`
.img{
   height: 150px;
   width: 150px;}
   p{
    text-align: center;
   }
    .row{
    width:100%;
    height400px}

    h3, .card-title, .btn{
    font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;}
  
`
export default function Form1(){

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

return (
   <>
   <Styles style={{paddingTop:"0px"}}>
   <h3 className='offset-1'>Popular products in 2024</h3>
   <Container  className='mb-3 d-flex justify-content-center'>
     
      <Row className='row px-3 py-3 d-flex justify-content-around '>
      {CardArray.map((item, i) => {
         return (
            <Col key={i} sm={6} md={4} style={{width:'300px'}} >
               <Card style={{borderRadius:'25px'}} className="py-3 d-flex justify-content-around align-items-center" key={i}>
                  <Card.Img className='img' variant="top" src={item.src} />
                  <Card.Body>
                     <Card.Title>{item.name}</Card.Title>
                     <Card.Text>{item.price}</Card.Text>
                  </Card.Body>
                 
                    <Button variant='outline-primary' onClick={addToCart}>Add to cart</Button>
               
               </Card>
            </Col>
         )
      })}
      </Row>
   </Container>
   </Styles>
   </>
)
}