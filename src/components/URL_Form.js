import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Input,
  ownerDocument
} from "@material-ui/core";
import styled from "styled-components";
import { useMutation, gql } from "@apollo/client";

const StyledBar = styled(Box)`
  background-color: #0a192a;
  padding: 1%;
  text-align: center;
`;

const StyledInput = styled(Input)`
  background-color: white;
  height: 50px !important;
  line-height: 100% !important;
  margin: 0 1% !important;
  padding: 0 25px;
`;

const StyledButton = styled(Button)`
  background-color: #2381c2 !important;
  color: white !important;
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
      .then((res) => document.location.reload(true))
      .catch((err) => console.log("error", err));
  }

  return (
    <Container style={{ backgroundColor: "#0a192a" }}>
      <StyledBar>
        <form onSubmit={(e) => handleSubmit(e)}>
          <StyledInput
            placeholder="Create Shorter Links"
            onChange={(e) => handleURLInput(e)}
          />
          <StyledInput
            placeholder="Custom Slug"
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
