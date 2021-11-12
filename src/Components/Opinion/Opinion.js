import React from 'react'
import styles from "./Opinion.module.css"

function Opinion() {
    return (

        <div className={styles.aboutContainer}>
            <h1 className={styles.titulo} > Opinión de nuestros clientes </h1>
            <h2 className={styles.subtitulo}> No hay nada que hable mejor de nuestro trabajo que lo que dicen
                nuestros clientes. Esperamos que pronto seas uno de ellos.</h2>
           <div className={styles.boxcontainer}>
            <div className={styles.box} >
                {/* <div className={styles.recipes}> */}
                <h5 className={styles.name}  > "El mejor lugar! Servicio súper confiable, honestos y muy atentos. Siempre estuvieron para acaparar todas mis dudas, los volveria a elegir mil veces! 👏🏽💛."</h5>
                <div className={styles.imagen} >
                </div>
                <h1 className={styles.title} > Florencia Perez Guzman</h1>
                {/* </div> */}
            </div>
            <div className={styles.box} >
                {/* <div className={styles.recipes}> */}
                <h5 className={styles.name}  > "Excelente servicio. Me atendieron súper bien, realmente estoy muy contenta con el producto, llego en tiempo y forma y cumplieron con todo lo que les pedí"</h5>
                <div className={styles.imagen} >
                </div>
                <h1  className={styles.title} > Paula Gil</h1>
                {/* </div> */}
            </div>
            <div className={styles.box} >
                {/* <div className={styles.recipes}> */}
                <h5 className={styles.name}  > "Espectacular atención, agradecido de haberme encontrado con los chicos de Green Pine porque encontre tanto el iPhone como el servicio que buscaba."</h5>
                <div className={styles.imagen} >
                </div>
                <div  >
                <h1 className={styles.title} >Guido Gambini</h1>
                </div>
                {/* </div> */}
            </div>
            </div>



        </div>

    )
}

export default Opinion
