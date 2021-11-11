import React from 'react'
import photo from "./green.jpg"
import coverVideo from "./coverVideo.mp4"
import styles from "./Cover.module.css"


const Cover = () => {
    return (
        <div className={styles.coverContainer}>
            <video className={styles.video} src={coverVideo} autoPlay loop muted />
            <source src={coverVideo} type="video/mp4" />
           {/* <h1> The Green Pine</h1> */} 
           <img   src={photo} alt="img not found" className={styles.img} />
        </div>
    )
}

export default Cover
