import styled from "styled-components"
const Styles = styled.div`
img{
width:400px;
height:400px;
}
`
export default function Back(){
    return(
       <Styles>
            <div style={{maxWidth:'80%', maxHeight:'400px', minHeight:"200px"}} as="bg" className="bg-white d-flex justify-content-around">
                <img style={{borderRadius:"25px 0 0 25px"}} src="https://content.rozetka.com.ua/goods/images/big/325530664.jpg"/>
                <img src="https://th.bing.com/th/id/OIP.XZQKtwxfrXTGM3m2_4nCLwHaHa?w=750&h=750&rs=1&pid=ImgDetMain"/>
                <img style={{borderRadius:"0 25px 25px 0"}} src="https://img.ingping.com/images/product/B/20194/20190412154651758770B.jpg"/>

               
            
            </div>          
            </Styles>
    )
}