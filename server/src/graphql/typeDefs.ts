import { gql } from "apollo-server-lambda";

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
export default typeDefs;