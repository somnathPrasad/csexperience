import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppBar from '../components/AppBar'

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-black text-white`}>
      <Head>
        <title>CS Experience</title>
        <meta name="description" content="CS Experience home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AppBar/>
        <div className={`sm:text-8xl text-6xl font-extrabold animationPulseColor`}>
          <p>Blogs</p>
          <p>Tutorials</p>
          <p>Portfolio</p>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
