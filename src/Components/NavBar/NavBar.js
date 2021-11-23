import React from 'react'
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom";

const NavBar = ({isScrolling}) => {



    return (
        <nav className={`${styles.navbar} ${isScrolling > 20 ? styles.scrolling: null}`}  >
            <div className={styles.contenedor}>
          {/*   <div  onClick={() => window.scrollTo({top:700, behavior:"smooth"})} className={styles.navBarLogo} >
                Sobre nosotros
                
            </div> */}
              <div onClick={() => window.scrollTo({top:1450, behavior:"smooth"})} className={styles.navBarLogo} >
            ¿Qué ofrecemos?
            </div>  
         
            <div  onClick={() => window.scrollTo({top:750, behavior:"smooth"})} className={styles.navBarLogo} >
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
