import { ApolloProvider } from "@apollo/client/react";
import { client as apolloClient } from "./src/apollo/client";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppNavigator>
      </AppNavigator>
    </ApolloProvider>
  );
}
