import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "http://10.25.21.60:4000/graphql" }),
  cache: new InMemoryCache(),
});
