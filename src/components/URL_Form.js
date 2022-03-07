import { Container, Box, TextField, Button } from "@material-ui/core";
import styled from "styled-components";

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

function URL_Form() {
  return (
    <Container>
      <StyledBar>
        <StyledTextField
          style={{ backgroundColor: "white" }}
          id="outlined-basic"
          label="Make your links shorter"
          variant="outlined"
        />
        <StyledTextField
          style={{ backgroundColor: "white" }}
          id="outlined-basic"
          label="Custom slug"
          variant="outlined"
        />
        <StyledButton variant="contained">Shorten URL</StyledButton>
      </StyledBar>
    </Container>
  );
}

module.exports = URL_Form;
