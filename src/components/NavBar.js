import logo from "../../public/assets/headway_pic1.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";

function NavBar() {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <IconButton>
          <img src={logo} />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          Features
        </Typography>
        <Typography
          variant="h6"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          Pricing
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

module.exports = NavBar;
