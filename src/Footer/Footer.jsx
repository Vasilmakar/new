import { Container } from "react-bootstrap";
import  Control  from "./FirsdComponent.jsx";
import Socials from './SecondComponent.jsx';
export default function Footer(){
     return (
        <>
        <Container fluid className=' d-flex flex-column justify-content-center' style={{marginTop:'60px', maxWidth:'100%' ,height:'500px', background:'#dadada'}}>
            <Control className='mb-2' />
            <Socials />

        </Container>
        </>
     )
}