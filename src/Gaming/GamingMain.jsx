import {Container} from 'react-bootstrap'
import ContainerGoods from '../Wirelles/ContainerGoods.jsx'

export default function Gaming(){
    return (
        <div style={{paddingTop:"130px"}}>
             <Container fluid className='d-flex ' style={{width:'80%', maxHeight:'400px', minHeight:"200px"}}>
               <img src="https://img.alicdn.com/i1/249789133/O1CN01NTAuBI2HKxy6Jjmyb_!!249789133.jpg" style={{width:'30%',borderRadius:'25px 0 0 25px'}} />
               <img src="https://th.bing.com/th/id/OIP.Bh1rstco-KHmmRRtGqtimAHaHa?w=626&h=626&rs=1&pid=ImgDetMain" style={{width:'40%'}} />
               <img src="https://ca.jlab.com/cdn/shop/files/JLab-Nightfall-Product-12.jpg?v=1699400365&width=1000" style={{width:'30%', borderRadius:'0 25px 25px 0'}} />
              </Container>
        <ContainerGoods  value={'gaming'}/>
        
        </div>
    )
}
// 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
// 
// git branch -m develop main
// git fetch origin
// git branch -u origin/main main
// git remote set-head origin -a