import { getDogWithId, getNextDog } from "../services/dogService";

const Resolvers = {
  Query: {
    getNextDog: async (_: any, args: any) => {
      return await getNextDog(args?.id);
    },
    getDog: async (_: any, args: { id: number }) => {
      return await getDogWithId(args.id);
    },
  },
};

export default Resolvers;
