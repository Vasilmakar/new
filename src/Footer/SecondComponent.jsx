import {Col, Row} from 'react-bootstrap'
import styled from 'styled-components'
const Styles = styled.div`
p{
  font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  color: #4b4b98}
  h4,h3{
  color: #4b4b98}
  img{
  width: 50px;
  height: 25px;
  }
  img:hover{
cursor: pointer;
  transform: scale(1.1);
}
`

export default function Socials(){

    return (

        <>
        <Styles>
        <div>
            <Row>
                <Col className='ms-5'>
                <h4><b>Shop</b></h4>
                <p>Wireless</p>
                <p>Waybills</p>
                <p>Budgetary</p>
                <p>Most popular</p>
                </Col>
                <Col className='ms-5'>
                <h4><b>About</b></h4>
                <p>Our story</p>
                <p>Shipping and returns</p>
                <p>Contact</p>
                <p>Blog</p>
                </Col >
                <Col className='ms-5'>
                <h4><b>Our mission</b></h4>
                <p>We sell the highest quality headphones, provide people with easy contact,
                     quick purchase and satisfaction with the goods received</p>
                </Col>
                <Col className='ms-5'>
                <h3><b><i>Satisfy</i></b></h3>
                </Col>
            </Row>
            <hr />
            <Row className='mt-4 d-flex justify-content-center'>
                <img  src='https://www.svgrepo.com/show/475647/facebook-color.svg'/>
                <img src='https://www.svgrepo.com/show/452229/instagram-1.svg'/>
                <img src='https://www.svgrepo.com/show/303156/tiktok-icon-white-1-logo.svg'/>
                <img src='https://www.svgrepo.com/show/382710/youtube-you-tube-video.svg'/>
                <img src='https://www.svgrepo.com/show/452121/twitter-1.svg/'/>
            </Row>
        </div>
        </Styles>
        </>
    )
}