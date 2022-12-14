import { gql } from "apollo-server-express";
const Schema = gql`
  type Dog {
    id: Int!
    image: String!
  }
  type Query {
    getNextDog(id: Int): Dog
    getDog(id: Int!): Dog
  }
`;
export default Schema;
