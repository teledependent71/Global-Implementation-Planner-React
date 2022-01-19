import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Global Implementation Planner</title>
        <meta property="og:title" content="Global Implementation Planner" />
      </Helmet>
    </div>
  )
}

export default Home
