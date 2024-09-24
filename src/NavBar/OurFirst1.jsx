import { Container, Carousel, Button } from "react-bootstrap"
import React from "react"
import Imgs from "./Carouselimg"

import styled from "styled-components"
const Styles = styled.div`
    .container{
    height:650px;
    width:100%;
    text-align:center;
   
}
    img{
    width: 85%;
    height: 600px;
    object-fit: cover;
    border-radius: 25px;

    }
    h2,p{
    
     font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
    }


    
    .main{
    width:100%;
    background-color: transparent;}
`
 function OurFirst({fade}){
const [index, setIndex] = React.useState(1);
  const handleSelect = (selected) => {
setIndex(selected );   
}
    return(
<Styles>
        <div className="main animation " data-aos={fade}style={{paddingTop:"130px"}}>       
        <Container  className="mb-5 " >
            <Carousel className=" pb-2"  activeindex={index} onSelect={handleSelect} >
                {Imgs.map((item, i) => {
                    return (
                  
                     <Carousel.Item  key={i}  >
                     <img key={i} src={item.src}></img>        
                    <Carousel.Caption className='  text-center w-50 mx-auto' style={{borderRadius:"100px 25px", background:"#9299c9"}}>
                   <h2>{ item.id === 1 && "Pleasant design" }</h2>
                   <h2>{ item.id === 2 && "Convenience" }</h2>
                   <h2>{ item.id === 3 && "Noise reductio" }</h2>
                   <p>{ item.id === 1 && "The best designers have worked on the appearance of these headphones: well-chosen color shades, attention to small details, and a sophisticated combination of styles." }</p>
                   <p>{ item.id === 2 && "High-quality material and long-term development have made these headphones extremely comfortable and practical in everyday use" }</p>
                   <p>{ item.id === 3 && "Noise-canceling cushions provide isolation from external noise, thanks to which the music sounds at the highest level" }</p>
                              
                    </Carousel.Caption>
                 </Carousel.Item>
                    )
                })}
            </Carousel>
          <div className='d-flex justify-content-center' >
            <Button index={index} variant="primary " disabled>
              {index+1} / 3
            </Button>
          </div>
        </Container>     
        </div>
        </Styles>
    )
}
export  {OurFirst};

            //   className="d-block w-100 " style={{ height:'400px'}}
            //    src="src/NavBar/headers.jpg" cover
            //         alt="First slide"