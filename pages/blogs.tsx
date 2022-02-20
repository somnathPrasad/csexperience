import Layout from "../components/layout";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../lib/posts/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Blogs({
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
      <main className="h-screen sm:mx-40 mx-10 flex justify-center sm:mt-32 mt-20">
        <div
          className={``}
        >
          <ul className={``}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={`text-2xl py-5`} key={id}>
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
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
