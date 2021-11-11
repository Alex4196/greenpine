/* import React from 'react'
import styles from "./Nosotros.module.css"
import photo from "./pineee.jpg"


const About = () => {
    return (
        <div  className={styles.aboutContainer}>
           <div className={styles.aboutDescription}> 
            <div className={styles.title}> ¿Por qué THE GREEN PINE? </div> 
           <h4 className={styles.text}> 

Muchos de ustedes nos conocen, muchos otros no, por lo que decidimos contarles un poco la historia del por qué del famoso pino verde, y de quiénes somos

Y antes de que se lo pregunten, el tatuaje vino antes que la empresa.

Pato Gonzalez Rosetti, Kevin Goumaz y Martin Gazzera vecinos desde hace 28 y 26 años, hermanos desde hace algunos años. Un día decidimos hacernos un tatuaje en común, algo que no solo representara una amistad inquebrantable sino también algo que representara nuestro origen, y nuestra vida. Y ahí es cuando apareció el pino, el símbolo de nuestro barrio, y que como el barrio mismo, englobaba todo lo que queríamos que ese dibujo representara y significara

Ese mismo pino decidimos que tenía que ser no solo el logo sino el nombre de nuestro emprendimiento, de nuestra nueva empresa, que día a día crece un poco más, exponencialmente me atrevería a decir, gracias al apoyo de cada uno de nuestros clientes, ustedes.

Muchos de ellos conocidos, quienes confían en nosotros, en nuestra forma de trabajar y en el profesionalismo que queremos demostrar, pero muchos más desconocidos, que decidieron confiar en nosotros y que nos hicieron sentir su agradecimiento y su conformidad con nosotros.

Decidimos que ese es nuestro pilar fundamental, la confianza, eso queremos dar, eso queremos que sientas, eso nos identifica.
Ganar un cliente es excelente, pero ganar la confianza de esa persona es impagable, y aunque así lo sea, hacemos todo lo necesario para retribuirles esa confianza, con un servicio de venta de equipos del primer nivel, impecables e impolutos, en cajas selladas, nuevos y directamente desde Apple; con un servicio de courier de altísima eficiencia, velocidad y comodidad para cada uno de ustedes, y con un servicio técnico especializado y de primera calidad.

Eso es lo que somos, somos confianza, somos eficiencia, somos agilidad y comodidad para el cliente.
           </h4>
               </div> 
               <div  className={styles.img}  > 
               
               <img   src={photo} alt="img not found" className={styles.img} />
               
               </div>
            
        </div>
    )
}

export default About */

/* import React from 'react'
import styles from "./Nosotros.module.css"
import photo from "./pineee.jpg"


const About = () => {
    return (
        <div  className={styles.aboutContainer}>
             <div className={styles.aboutContainer} > 
            <div className={styles.text}>
                <div className={styles.blur} >
                <p  className={styles.parrafo} >Muchos de ustedes nos conocen, muchos otros no, por lo que decidimos contarles un poco la historia del por qué del famoso pino verde, y de quiénes somos Y antes de que se lo pregunten, el tatuaje vino antes que la empresa. Pato Gonzalez Rosetti, Kevin Goumaz y Martin Gazzera vecinos desde hace 28 y 26 años, hermanos desde hace algunos años. Un día decidimos hacernos un tatuaje en común, algo que no solo representara una amistad inquebrantable sino también algo que representara nuestro origen, y nuestra vida. Y ahí es cuando apareció el pino, el símbolo de nuestro barrio, y que como el barrio mismo, englobaba todo lo que queríamos que ese dibujo representara y significara Ese mismo pino decidimos que tenía que ser no solo el logo sino el nombre de nuestro emprendimiento, de nuestra nueva empresa, que día a día crece un poco más, exponencialmente me atrevería a decir, gracias al apoyo de cada uno de nuestros clientes, ustedes. Muchos de ellos conocidos, quienes confían en nosotros, en nuestra forma de trabajar y en el profesionalismo que queremos demostrar, pero muchos más desconocidos, que decidieron confiar en nosotros y que nos hicieron sentir su agradecimiento y su conformidad con nosotros. Decidimos que ese es nuestro pilar fundamental, la confianza, eso queremos dar, eso queremos que sientas, eso nos identifica. Ganar un cliente es excelente, pero ganar la confianza de esa persona es impagable, y aunque así lo sea, hacemos todo lo necesario para retribuirles esa confianza, con un servicio de venta de equipos del primer nivel, impecables e impolutos, en cajas selladas, nuevos y directamente desde Apple; con un servicio de courier de altísima eficiencia, velocidad y comodidad para cada uno de ustedes, y con un servicio técnico especializado y de primera calidad. Eso es lo que somos, somos confianza, somos eficiencia, somos agilidad y comodidad para el cliente. </p>
                     </div>
            </div>
         </div> 
            
        </div>
    )
}

export default About */

import React from 'react'
import styles from "./Nosotros.module.css"
import photo from "./pineee.jpg"
import {Link} from "react-router-dom";


const About = () => {
    return (
        <div  className={styles.aboutContainer}>
          
            <div className={styles.text}>
                <div className={styles.blur} >
                <p  className={styles.parrafo} >Somos Patricio Gonzalez Rosetti, Kevin Goumaz y Martin Gazzera. Un día decidimos hacernos un tatuaje en común, algo que no solo representara una amistad inquebrantable sino también algo que representara nuestro origen, y nuestra vida. Y ahí es cuando apareció el pino, el símbolo de nuestro barrio, y que, como el barrio mismo, englobaba todo lo que queríamos que ese dibujo representara y significara. Ese mismo pino decidimos que tenía que ser no solo el logo sino el nombre de nuestro emprendimiento, de nuestra nueva empresa, que crece a pasos agigantados gracias a nuestros clientes. Muchos de ellos conocidos, quienes confían en nosotros, en nuestra forma de trabajar y en el profesionalismo que queremos demostrar, pero muchos más desconocidos, que decidieron confiar en nosotros y que nos hicieron sentir su agradecimiento y su conformidad con nosotros. Decidimos que ese es nuestro pilar fundamental, la confianza, eso queremos dar, eso queremos que sientas, eso nos identifica. Con un servicio de venta de equipos del primer nivel, impecables e impolutos, en cajas selladas, nuevos y directamente desde Apple. Eso es lo que somos, somos confianza, somos eficiencia, somos agilidad y comodidad para el cliente. </p>
                     </div>
            </div>
      
      
      
         </div>
        
    )
}

export default About

