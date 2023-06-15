import styles from "./banner.module.css"
import React, { useEffect, useState } from 'react';

const Banner = () => {

    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);
    return (
        <section className={styles.container}>

            <div className={`${styles.left} ${showContent ? styles.show : ''}`}>
                <p className={styles.header3}>Simplify Payments with</p>
                <p className={styles.header2}>Aspapay Payment Gateway</p>
                <p className={styles.paraText}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga distinctio quos asperiores voluptatum totam ut, harum
                    ad. Perspiciatis, quis asperiores adipisicing elit. Fuga distinctio quos asperiores voluptatum totam ut, harum ad.
                    Perspiciatis, quis asperiores
                </p>
            </div>



            <div className={styles.right}>
                <img src="https://images.pexels.com/photos/6289028/pexels-photo-6289028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="digital transactions" className={styles.bannerImg} />
            </div>

            {/* <div className={styles.cover}>

            </div> */}
        </section>
    )
}

export default Banner