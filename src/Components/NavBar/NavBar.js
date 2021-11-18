import React from 'react'
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom";

const NavBar = ({isScrolling}) => {

const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
}

    return (
        <nav className={`${styles.navbar} ${isScrolling > 20 ? styles.scrolling: null}`}  >
            <div className={styles.contenedor}>
            <div  onClick={() => window.scrollTo({top:700, behavior:"smooth"})} className={styles.navBarLogo} /* onClick={toTheTop} */>
                Sobre nosotros
                
            </div>
              <div onClick={() => window.scrollTo({top:2250, behavior:"smooth"})} className={styles.navBarLogo} >
            ¿Qué ofrecemos?
            </div>  
         
            <div  onClick={() => window.scrollTo({top:1450, behavior:"smooth"})} className={styles.navBarLogo} >
            Productos
            </div>
            <div onClick={() => window.scrollTo({top:7000, behavior:"smooth"})} className={styles.navBarLogo} >
            ¡Contactanos!
            </div>
            </div>
           


        </nav>
    )
}

export default NavBar
