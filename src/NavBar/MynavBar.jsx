import React from "react"
import addCartArray from "../OurFunction"
import {Navbar,Nav, Container, Row , Modal, Col, Dropdown, Offcanvas, Card, Form, Button } from "react-bootstrap"

import { Link } from "react-router-dom"
import styled from "styled-components"
const Styles = styled.div`
img:hover{
cursor: pointer;
 transform: scale(1.1);};
 Nav:hover{
 decoration: none;
 }
 subtittle, .offcanvas-header{
 font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;}


`
export default function MynavBAr( ){


    const [show, setShow] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [total, setTotal] = React.useState(0);
const [state, setState] = React.useState(0);
const [newstate, setNewstate] = React.useState(0)
     const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);
    const openOpenOptions = () => setOpen(true);
    const closeOpenOptions  = () => setOpen(false);

   const handleMinus = (e)=>{       
        addCartArray.map((ele)=>{
             if(ele.id === e.target.id ){
                 console.log(ele.quantity)
                 if(ele.quantity  !== 0){
                 ele.quantity -= 1
                 setState(ele.quantity) 
                 summ()  
                 } else {
                    addCartArray.shift(ele)
                     setNewstate(newstate + 1) 
                    //  summ()
                 }
              }
            })
          }

        const handlePlus = (e)=>{    
            addCartArray.map((ele)=>{
                if(ele.id === e.target.id ){
                    console.log(ele.quantity)
                    ele.quantity += 1   
                    setState(ele.quantity) 
                    summ()             
                }
             })
           }
         
           const removeProduct = (e)=>{
            console.log(e.target.id)
            addCartArray.map((ele)=>{
                if(ele.id === e.target.id ){
                     addCartArray.shift(ele)
                     console.log(e.target.id)
                     setState(state + 1)
                     summ()                      
                }})
           }

     const summ = ()=>{
        let sum = 0
        addCartArray.map((ele)=>{
             sum += ele.quantity * ele.price            
        })
        setTotal(sum)
     }


    return(
        <>

      <Styles>
         <Navbar  style={{width:"100%", position:"fixed", zIndex:"2", background: 'url(https://img.freepik.com/free-vector/minimalist-white-abstract-background_23-2148816315.jpg?t=st=1725889399~exp=1725892999~hmac=b3ed9a2d83928c60581faaf64580dba32c09809581b8f027912d5ae98c48a133&w=996)',backgroundSize:'cover', color: 'white'}} className="bg-theme-dark " variant="dark">
         <Container  style={{ width:"100%", height:'100px'}}className=' flex-column'  >
         
            <div style={{fontFamily:'revert-layer'}} className="d-flex justify-content-between align-items-center w-100">
            <img onClick={openOpenOptions} src="https://www.svgrepo.com/show/532552/search-alt-2.svg" width='30' height='30'></img>
                <Navbar.Brand href="#home"><Link style={{color:'black', textDecoration:"none"}} to="/">Satisfy</Link></Navbar.Brand>
                <img onClick={handleOpen}  width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-center">
                    <Nav   className="me-auto" >
                        <Nav.Link ><Link style={{color:'black', textDecoration:"none"}}   to='/wireless' >Wireless</Link></Nav.Link>
                        <Nav.Link ><Link style={{color:'black', textDecoration:"none"}} to='/wired' >Wired</Link></Nav.Link>
                        <Nav.Link ><Link style={{color:'black', textDecoration:"none"}} to='/gaming' >Gaming</Link></Nav.Link>
                        <Nav.Link ><Link style={{color:'black', textDecoration:"none"}} to='/popular' >Most popular</Link></Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle style={{color:'black'}} variant="outline-light" id="dropdown-basic">
                            Categories
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">About us</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Community</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Support</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>  
                </Container>       
         </Navbar>

         <Offcanvas style={{width:"450px", background:"#eeeefe"}} show={show} onHide={handleClose}  placement='end' >
         <Offcanvas.Header   closeButton>
                <Offcanvas.Title><b><i>Your Cart</i></b></Offcanvas.Title>  
                </Offcanvas.Header>    
              
                <Offcanvas.Body >
                <Row style={{height:"10px"}}>
                <Col><p className="transparent ">Product</p></Col>
                <Col className='text-end '><p>Total</p></Col>
                </Row>
                <hr />
            {addCartArray.map((product, idx)=>{
                if(addCartArray){
               return(
                <div key={idx} className='mb-3'>
                    
                <Container  className='mb-3' >
                    <Row>
                    <Col><Card >
                        <Card.Img variant="top"  src={product.image}/>
                        {/* <Card.Body >
                        <h5>{product.name}</h5>
                        <p>${product.price}.00</p>
                        <button className="btn btn-danger btn-sm">Remove</button>
                        </Card.Body> */}
                    </Card>
                    </Col>
                    <Col > 
                    <div style={{color:"rgb(27 49 145)"}}>
                    <h5>{product.name}</h5>
                        <p>${product.price}.00</p>
                        </div>
                        <div   className="d-flex">
                            <div  style={{width:"140px",  border:"1px solid #715bbc", borderRadius:"25px"}} className="d-flex justify-content-around align-items-center">
                            <button  id={product.id}  onClick={handleMinus} style={{color:"black",  background:"transparent", scale:"1.5"}}>-</button>
                            <span>{product.quantity}</span>  {/*quantity */}
                            <button id={product.id} onClick={handlePlus} style={{color:"black", background:"transparent", scale:"1.5"}}>+</button>
                        </div>
                        <button id={product.id}  onClick={removeProduct} className='bg-transparent'><img id={product.id}  style={{width:"20px", height:"20px"}} src='https://www.svgrepo.com/show/502606/delete-3.svg'/></button>

                        </div>
                        <div>
                        </div>
                        </Col>
                    
                    <Col className='text-end' >${product.price*product.quantity}</Col>
                    </Row>
                  
                </Container>
                </div>)
                }
                else{
                      return (
                    
                       
                            <h1>Cart is empty</h1>
                            
                      )
                }})}
               
           
                 </Offcanvas.Body>
                 <div className='ms-3' style={{ background:"#eeeefe", width:"406px"}}>
                    <div className='d-flex justify-content-between'>
                    <span><p>Subtotal</p></span>
                    <span className='text-end'>${total}</span>
                    </div>
                    <div>
                 <Button  className='mb-2'  variant='primary' >Checkout</Button>
                 </div>
                 </div>
    
           
        </Offcanvas>

        <Modal show={open} onHide={closeOpenOptions} size='lg'  >
            <Modal.Header closeButton className='bg-secondary'>
            <Form.Control type="text" placeholder="Search"   />
                </Modal.Header>
           
        </Modal>
        
         </Styles>
        

       
        
        </>
    )
}
