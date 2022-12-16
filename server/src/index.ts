import { ApolloServer } from "apollo-server-express";
import Schema from "./graphql/Schema";
import Resolvers from "./graphql/Resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

async function startApolloServer(schema: any, resolvers: any) {
  const port = process.env.NODE_ENV === "production" ? 80 : 4000;
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: port }, resolve)
  );
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
}

startApolloServer(Schema, Resolvers);
