import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";


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
          className={`sm:text-9xl text-7xl font-black text-center mainTextAnimation`}
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
