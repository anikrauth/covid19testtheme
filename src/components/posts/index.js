import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  {
    posts {
      nodes {
        id
        title(format: RENDERED)
        votes
      }
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  const posts = data.posts.nodes;

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error :(</p>;

  return posts.map(({ postId, title }) => <h3 key={postId}>{title}</h3>);
};

export default Posts;
