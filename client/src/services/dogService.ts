import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export interface IDog {
  id: number;
  image: string;
}

export interface IGetNextDogQuery {
  getNextDog: IDog;
}

export interface IGetDogQuery {
  getDog: IDog;
}

const client = new ApolloClient({
  uri: process.env.GATSBY_GRAPHQL_BACKEND_URL,
  cache: new InMemoryCache(),
});

export const getNextDog = async (id?: number) => {
  const result = await client.query<IGetNextDogQuery>({
    query: gql`
      query GetNextDog($id: Int) {
        getNextDog(id: $id) {
          id
          image
        }
      }
    `,
    variables: {
      id: id,
    },
  });
  return result.data.getNextDog;
};

export const getDogWithId = async (id: number) => {
  const result = await client.query<IGetDogQuery>({
    query: gql`
      query GetDog($id: Int!) {
        getDog(id: $id) {
          id
          image
        }
      }
    `,
    variables: {
      id: id,
    },
  });
  return result.data.getDog;
};
