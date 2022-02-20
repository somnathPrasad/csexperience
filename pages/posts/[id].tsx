import Layout from "../../components/layout";
import React from "react";
import { getAllPostIds, getPostData } from "../../lib/posts/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Date from "../../components/date";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    id: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="px-10 sm:px-20 mt-32 mb-16">
        <h1 className="text-4xl font-semibold">{postData.title}</h1>
        <div className="text-light-text">
          <Date dateString={postData.date} />
        </div>
        <div className="text-lg blogContent" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData =
    params !== undefined && (await getPostData(params.id as string));
  return {
    props: {
      postData,
    },
  };
};
