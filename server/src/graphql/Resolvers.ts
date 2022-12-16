import { getDogWithId, getNextDog } from "../services/dogService";

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

export default resolvers;
