import MynavBAr from "./MynavBar"
import React from 'react'
import { OurFirst } from "./OurFirst1"
import Form1 from "./Form1.jsx"
import Brands from "./Brands"
import Wireless from "./Home"
import Waybills from "./Waybills.jsx"
import Budge from "./Budget"

export default function CreateFirstPage(){

    return(
        <div>       
        <OurFirst/>
        <Form1/>
        <Brands/>
        <Wireless/>
        <Waybills/>
        <Budge/>
        </div>
    )
}