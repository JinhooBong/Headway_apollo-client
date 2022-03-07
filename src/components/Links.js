import { useQuery, gql } from "@apollo/client";

function Links() {
  const { loading, error, data } = useQuery(gql`
    {
      allLinks {
        url
        slug
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allLinks.map(({ url, slug }) => (
    <div>
      <p>
        {url} : {slug}
      </p>
    </div>
  ));
}

module.exports = Links;
