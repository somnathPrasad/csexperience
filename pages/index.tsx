import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>CS Experience</title>
        <meta name="description" content="CS Experience home page" />
      </Head>

      <main className={styles.main}>
        <section>
          <div
            className={`sm:text-9xl text-7xl font-black text-center mainTextAnimation`}
          >
            <p>Blogs</p>
            <p>Tutorials</p>
            <p>Portfolio</p>
          </div>
        </section>
        <section className={`mt-10 sm:mx-0 mx-5`}>
          <div className={`border-4 rounded-2xl px-10 animationPulseColor_border py-5`}>
            <Link href="/blog">
              <a className={`text-4xl font-medium`}>Blogs</a>
            </Link>
            <ul className={`mt-5`}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={`text-2xl`} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={`text-light-text`}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
