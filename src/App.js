import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import URL_Form from "./components/URL_Form";
import Links from "./components/Links";
import { gql } from "@apollo/client";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <URL_Form />
      <Links />
    </div>
  );
}

module.exports = App;
