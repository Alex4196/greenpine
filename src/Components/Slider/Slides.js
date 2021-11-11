import React from "react";
import styles from "./Slider.module.css"

const slidesInfo = [
    {
        src: "https://images.unsplash.com/photo-1621387494792-631e99e8aa92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        alt: "Iphone 11",
        desc: "Iphone 11",
        link: "https://www.instagram.com/the.green.pine/" 
    },
    {
        src: "https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80",
        alt: "Iphone 12",
        desc: "Iphone 12",
        link:"https://www.instagram.com/the.green.pine/"
    },
    {
        src: "https://images.unsplash.com/photo-1635425730507-26c324aadbc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        alt: "Iphone 13",
        desc: "Iphone 13",
        link: "https://www.instagram.com/the.green.pine/"
    },
    {
        src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
        alt: "Macbook",
        desc: "Macbook",
        link: "https://www.instagram.com/the.green.pine/"
    }, 
     {
        src: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
        alt: "iphone",
        desc: "Accesorios",
        link: "https://www.instagram.com/the.green.pine/"
    },  
  
]

const Slides = slidesInfo.map(slide => (

    <div className={styles.slideContainer} >
        <a href={slide.link} target="_blank" >
        <img  src={slide.src}  alt={slide.alt} />
        </a>
   <div className={styles.slideDesc}  > 
   <span> {slide.desc} </span>
     </div>

         </div>
))

export default Slides;