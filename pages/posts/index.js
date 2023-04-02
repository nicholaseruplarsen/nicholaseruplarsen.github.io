import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
// import BlogCard from "../../components/BlogCard";
import BlogXD from "../../components/BlogXD";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl5xqcwcd21jm01ukex1g8rgo/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default function Posts({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicholas Erup Larsen</title>
        <meta name="description" content="A blog tutorial made with JAMstack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogXD
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
}
