import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      

      {/* <Link to="/" className={styles.text}>Home</Link> */}
      <h1 className={styles.text}> ॥ श्री गणेशाय नमः ॥</h1>
      {/* <Link to="/login" className={styles.text}>Login</Link> */}

    </div>
  )
}
