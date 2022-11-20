import React from 'react';
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";
import Hero4 from "../assets/hero4.avif";


function Main() {
  return (
    <Carousel 
    infiniteLoop autoPlay showStatus={false}
    showArrows={false}
    interval={4000}>
         <div>
        <img src={Hero1} alt="hero1img"/>
        </div>
       <div><img src={Hero2} alt="hero2img"/></div> 
       <div><img src={Hero3} alt="hero3img"/></div> 
       <div><img src={Hero4} alt="hero4img"/></div> 

    </Carousel>
   
  )
}

export default Main;