import { Container, Grid } from "@material-ui/core";
import HeroImg from "../../public/assets/headway_pic3.png";

function Hero() {
  return (
    <Container
      justifyContent="center"
      alignItems="center"
      style={{ padding: "2% 20px" }}
      sx={{ width: "100vw", height: "50vh" }}
    >
      <Grid container>
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <h1>Shorten your Links!</h1>
          <p>
            Keep it simple! Enter your Link below, input a custom slug (if you
            desire), if not our application will generate a random unique slug
          </p>
        </Grid>
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <img src={HeroImg} alt={"Rebrandly icon"} />
        </Grid>
      </Grid>
    </Container>
  );
}

module.exports = Hero;
