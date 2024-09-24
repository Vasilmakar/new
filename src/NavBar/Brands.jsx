
import {Container, Row} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
export default function Brands(){


    return (
        <>
        
        <Container style={{background:'white', width:'83%', borderRadius:'25px', paddingTop:"0px"}} className='offset-1 my-5' data-aos='zoom'>
        <Row className='d-flex justify-content-center '>
                <div style={{width:'200px'}} className='mx-3 text-center'>
                    <img src='https://th.bing.com/th/id/OIP.JU2TK3aOHbL8DqGWglOsbQAAAA?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' style={{width:'100px', height:'100px'}} />
                    <p><b>
                    +Folding design +Rich, full-bodied sound +Punchy, dynamic delivery +Exceptional noise cancelling
                    </b>
                        
                        </p>
                        </div>
               <div style={{width:'200px'}} className=' mx-3 text-center'>
               <img src='https://th.bing.com/th/id/OIP.efxRHxjVeX8oXklDDWBqSAHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'  style={{width:'100px', height:'100px'}} />
               <p><b>+Musical, entertaining sound
                    +Good sense of timing
                    +Surprisingly solid, weighty bass
                    +Comfortable fit.</b></p>
                    </div>
                    <div style={{width:'200px'}} className=' text-center d-flex flex-column justify-content-around align-items-center'>
                    <img src='https://th.bing.com/th/id/OIP.pW0TOZyl_OZMIuo5HjUsyQHaIf?w=186&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7' style={{width:'70px', height:'70px'}}/>
                     <p>
                        <b>Rich, well-balanced audio performance
                           Excellent active noise cancellation
                       </b>
                        </p>
                        </div>
                    <div style={{width:'200px'}} className='mt-3 mx-3 text-center'>
                        <img src='https://th.bing.com/th/id/OIP.i3iiaJ36_8ryzEYwrHmRLgHaCQ?w=296&h=106&c=7&r=0&o=5&dpr=1.3&pid=1.7' style={{width:'180px', height:'80px'}}/>
                         
                    <p><b>Rich bass response and crisp, detailed highs
                        Adjustable in-app EQ
                        Excellent noise cancellation
                       
                         </b></p>
                        </div>
        
        </Row>
        </Container>
       
      
        </>
    )
}