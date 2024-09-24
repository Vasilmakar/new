import ContainerGoods from '../Wirelles/ContainerGoods.jsx'
import {Container } from 'react-bootstrap'

export default function Popularity(){

    return (

        <div style={{paddingTop:"130px"}}>
        <Container fluid className='d-flex mt-5 ' style={{width:'60%', maxHeight:'500px', minHeight:"200px"}}>
            <img src="https://inkorr.com/uploads/01-12-2024-03-53-20-2482959270.jpg" style={{width:'100%',borderRadius:'25px'}} />        
        </Container>
       <ContainerGoods value={'popular'}/>

        </div>
    )
}
