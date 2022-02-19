import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppBar from "../components/AppBar";
import Layout from "../components/layout";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>CS Experience</title>
        <meta name="description" content="CS Experience home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          className={`sm:text-8xl text-6xl font-extrabold animationPulseColor`}
        >
          <p>Blogs</p>
          <p>Tutorials</p>
          <p>Portfolio</p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
