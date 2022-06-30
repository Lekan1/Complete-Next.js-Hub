import Layout from "./layouts/Layout";

export const Post = ({ data }) => {
  return (
    <Layout>
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
    </Layout>
  );
};

export default Post;

export const getStaticProps = () => {
  const data = {
    title: "New Post 1",
    desc: "mkfaklnfalfkn  afnllllllllllll",
  };

  return {
    props: {
      data,
    },
  };
};
