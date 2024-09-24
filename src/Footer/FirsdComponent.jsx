import {Form} from 'react-bootstrap'
import styled from 'styled-components'
const Styles = styled.div`
.form-control::placeholder{
font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
color: #4b4b98;
font-size: 15px;
}
.form-control{
 font-family: "Roboto", sans-serif;
 font-size: 20px;
 color: #4b4b98;}
 
h2{
color: #4b4b98}
`

export default function Control(){

    return (

        <>
        <Styles>
        <div className='mb-5 d-flex flex-column justify-content-around text-center'>
            <h2>Get 10% off your first order.</h2>
            <p>Plus get early access to new launches and our best self-care tips.</p>
            <Form.Control  size='lg' className='offset-4' type='email' placeholder='Email' style={{ maxWidth:'500px', background:'rgb(242 242 242)', borderRadius:'25px', border:'2px solid gray'}}/>
           
        </div>
        </Styles>
        </>
    )
}