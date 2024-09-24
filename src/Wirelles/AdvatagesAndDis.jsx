import {Container}  from 'react-bootstrap'
import styled from 'styled-components'
const Styles = styled.div`
li, h2{
margin-left: 20px;
font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
`
export default function AdvDis(){

    return (

        <>
        <Styles>
        <Container style={{background:'white', borderRadius:'25px'}} fluid className='mt-5 pt-4 pb-4 d-flex justify-content-around'>
            <div className='pt-4' style={{maxWidth:"500px", maxHeight:'800px', background:'rgb(228 234 255)', borderRadius:'25px'}}>
                <h2 >Advantages </h2>
                <ul>
                    <li>
                        <h5>Freedom of movement:</h5>
                        <p>The absence of wires allows you to move without restriction without getting tangled in cables.</p>
                        </li>
                    <li>
                        <h5>Comfort:</h5>
                        <p>Over-the-ear headphones typically provide comfortable wear for long periods of time.</p>
    
                    </li>
                    <li>
                        <h5>Ease of use:</h5>
                        <p>Easy connection to various devices via Bluetooth, intuitive operation.</p>
                    </li>
                    <li>
                        <h5>Mobility:</h5>
                        <p>Compact models fit easily into a bag or backpack.</p>
                    </li>
                    <li>
                     <h5>Sound quality:</h5>
                        <p> Modern models offer high quality sound, including support for high-resolution codecs.</p>
                    </li>
                    <li>
                        <h5>Additional features:</h5>
                        <p>Many models come with active noise cancellation, voice assistant, touch controls, and more.</p>
                    </li>
                    <li>
                        <h5>Long operating time:</h5>
                        <p>Most models offer several hours of battery life on a single charge.</p>
                    </li>
                </ul>
              
            </div>
            <img className='align-self-center' style={{width:"150px", height:"150px"}} src="https://www.svgrepo.com/show/463640/right-square.svg"/>
            <div className='pt-4' style={{maxWidth:"500px", maxHeight:'800px', background:'rgb(228 234 255)', borderRadius:'25px'}}>
                <h2>Disadvantages</h2>
                <ul>
                    <li>
                        <h5>Price:</h5>
                        <p>As a rule, wireless headphones are more expensive than their wired counterparts.</p>
                    </li>
                    <li>
                    <h5>Dependence on charge:</h5>
                    <p>They require periodic recharging.</p>

                    </li>
                    <li>
                    <h5>Connection quality:</h5>
                    <p>here may be interference when connecting via Bluetooth, especially in places with a lot of other wireless devices.</p>
                    </li>
                    <li>
                    <h5>Dimensions: </h5>
                    <p>Over-the-ear headphones can be bulky to carry in your pocket.</p>
                    </li>         
                    </ul>
            </div>
        </Container>
        </Styles>
        </>
    )
}