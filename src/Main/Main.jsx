import MynavBAr from "../NavBar/MynavBar";
import React from 'react';
import Popularity from "../TheMostPopular/TheMostPopular.jsx";
import Gaming from "../Gaming/GamingMain.jsx";
import CreateFirstPage from "../NavBar/FirstPage";
import Wired from "../MyWirellesHeadpnones/Wired.jsx";
import Footer from "../Footer/Footer.jsx";
import Wirelles from "../Wirelles/Wirelles.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css'

export default function Main() {
  const [active, setActive] = React.useState(<MynavBAr/>);
  const [scrollY, setScrollY] = React.useState();

  React.useEffect(() =>{
    AOS.init({duration: 1100})})

const pageScroll = (()=>{
    
    if(window.scrollY < scrollY){
        setActive(<MynavBAr/>)
    }else{
        setActive(null)
    }
    setScrollY(window.scrollY);   
 })
window.addEventListener('scroll', pageScroll)

    return(
<div  className='w-80  ' style={{ background:'#e9e1f4'}}>
        <BrowserRouter>
        {active}
        <Routes>
            <Route path="/" element={<CreateFirstPage /> } />
           
            <Route path="/wireless" element={<Wirelles/>} />
            <Route  path="/wired" element={<Wired />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/popular" element={<Popularity />} />
           

            </Routes>
            <Footer/>
            </BrowserRouter>
        
        </div>
    )
}
