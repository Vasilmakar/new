import {Container} from 'react-bootstrap'


export default function Ground(){

    return (

        <>
        <Container fluid className='d-flex ' style={{width:'80%', maxHeight:'400px', minHeight:"200px"}}>
            <img src="https://www.scienceofgifts.com/assets/noise-cancelling.jpg" style={{width:'30%',borderRadius:'25px 0 0 25px'}} />
            <img src="https://th.bing.com/th/id/OIP.HuYyY_mM37hvdQwmSxOUBwAAAA?pid=ImgDet&w=185&h=185&c=7&dpr=1,3" style={{width:'35%'}}/>
            <img src="https://japan-trip-culture.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-25-at-11.57.17-AM.png" style={{width:'35%', borderRadius:'0 25px 25px 0'}} />
        </Container>
        
        </>
    )
}