import { useState } from "react";
import { Container, Box, TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { useMutation, gql } from "@apollo/client";

const StyledBar = styled(Box)`
  background-color: #0a192a;
  padding: 1%;
  text-align: center;
`;

const StyledTextField = styled(TextField)`
  background-color: white;
  height: 50px;
  margin: 0 1%;
`;

const StyledButton = styled(Button)`
  background-color: #90caf9;
  height: 50px;
`;

const ADD_LINK = gql`
  mutation CreateLink($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

function URL_Form() {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  const [addLink] = useMutation(ADD_LINK, {
    variables: {
      url: url,
      slug: slug
    }
  });

  function handleURLInput(e) {
    // console.log("url", e.target.value);
    setUrl(e.target.value);
  }

  function handleSlugInput(e) {
    // console.log("slug", e.target.value);
    setSlug(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("url", url);
    // console.log("slug", slug);
    addLink()
      .then((res) => console.log(res))
      .catch((err) => console.log("error", err));
  }

  return (
    <Container>
      <StyledBar>
        <form onSubmit={(e) => handleSubmit(e)}>
          <StyledTextField
            style={{ backgroundColor: "white" }}
            id="outlined-basic"
            label="Make your links shorter"
            variant="outlined"
            onChange={(e) => handleURLInput(e)}
          />
          <StyledTextField
            style={{ backgroundColor: "white" }}
            id="outlined-basic"
            label="Custom slug"
            variant="outlined"
            onChange={(e) => handleSlugInput(e)}
          />
          <StyledButton variant="contained" type="submit">
            Shorten URL
          </StyledButton>
        </form>
      </StyledBar>
    </Container>
  );
}

module.exports = URL_Form;
