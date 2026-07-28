import { ApolloProvider } from "@apollo/client/react";
import { client as apolloClient } from "./src/apollo/client";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <HomeScreen />
    </ApolloProvider>
  );
}
