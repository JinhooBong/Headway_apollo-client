// start
import React from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://yi84o5.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

function Links() {
  const { loading, error, data } = useQuery(gql`
    {
      link(id: 1) {
        url
        slug
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <p>
      {data.link.url}:{data.link.slug}
    </p>
  );
}

function App() {
  return (
    <div>
      <h2>Test</h2>
      <Links />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
