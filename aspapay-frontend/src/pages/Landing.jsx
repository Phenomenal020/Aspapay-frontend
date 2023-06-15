import React from 'react'
import Banner from '../components/banner/Banner'
import styles from "./landing.module.css"

const Landing = () => {
    return (
        <section className={styles.container}><Banner /></section>
    )
}

export default Landing