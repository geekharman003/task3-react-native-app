import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

export const schema = createSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(4000, () => {
  console.info("Server running on http://localhost:4000/graphql");
});
