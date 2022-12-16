import { ApolloServer } from "apollo-server-lambda";
import resolvers from "../graphql/resolvers";
import typeDefs from "../graphql/typeDefs";

const getHandler = (event: any, context: any) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const graphqlHandler = server.createHandler();
  if (!event.requestContext) {
    event.requestContext = context;
  }
  return graphqlHandler(event, context, () => {});
};

exports.handler = getHandler;
