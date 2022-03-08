import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import { Container } from "@material-ui/core";

const StyledContainer = styled(Container)`
  text-align: center;
`;

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
    <StyledContainer>
      <p>
        {url} --> {window.location.href}
        {slug}
      </p>
    </StyledContainer>
  ));
}

module.exports = Links;
