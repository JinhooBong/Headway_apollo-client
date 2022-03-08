import logo from "../../public/assets/headway_pic1.png";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  box-shadow: 0px;
  background-color: white;
`;

function NavBar() {
  return (
    <StyledAppBar
      style={{ background: "transparent", boxShadow: "none" }}
      position="static"
    >
      <Toolbar>
        <IconButton>
          <img src={logo} alt={"Logo"} />
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
}

module.exports = NavBar;
