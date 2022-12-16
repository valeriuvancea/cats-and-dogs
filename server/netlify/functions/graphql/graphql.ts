import { ApolloServer, gql } from "apollo-server-lambda";
import { getDogWithId, getNextDog } from "./services/dogService";

const resolvers = {
  Query: {
    getNextDog: async (_: any, args: { id: number }) => {
      return await getNextDog(args?.id);
    },
    getDog: async (_: any, args: { id: number }) => {
      return await getDogWithId(args.id);
    },
  },
};

const typeDefs = gql`
  type Dog {
    id: Int!
    image: String!
  }
  type Query {
    getNextDog(id: Int): Dog
    getDog(id: Int!): Dog
  }
`;

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
