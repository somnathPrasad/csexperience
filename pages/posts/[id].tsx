import Layout from "../../components/layout";
import React from "react";
import { getAllPostIds, getPostData } from "../../lib/posts/posts";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    id: string;
    // contentHtml: string;
  };
}) {
  return (
    <Layout>
      <main className="flex justify-center items-center h-screen">
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </main>
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
  const postData = params !== undefined && getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
