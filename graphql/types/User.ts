import { extendType, nonNull, objectType, stringArg } from "nexus";
import { SavedWorkout } from "./Workout";

export const User = objectType({
    name : "User",
    definition(t:any){
        t.string("id"),
        t.string("name")
        t.string("image"),
        t.string("email"),
        t.list.field("savedWorkouts",{
            type: SavedWorkout,
            async resolve(parent:any, _args: any, context: any){
                return await context.prisma.user.findUnique({
                    where:{
                        id: parent.id
                    }
                }).savedWorkouts()
            }

        })
    }
})

export const FetchAllUsers = extendType({
    type: "Query",
    definition(t: any) {
      t.nonNull.list.field("fetchAllUsers", {
        type: "User",
        async resolve(_root: any, _args: any, context: any) {
          return await context.prisma.user.findMany();
        },
      });
    },
  });

  export const FetchUser = extendType({
    type: "Query",
    definition(t: any) {
      t.nonNull.list.field("fetchUser", {
        type: "User",
        args: {
          id: nonNull(stringArg()),
        },
        async resolve(_root: any, args: any, context: any) {
          return await context.prisma.user.findMany({
            where: {
              id: args.id,
            },
          });
        },
      });
    },
  });

  export const AddToFavorites = extendType({
    type: "Mutation",
    definition(t: any) {
      t.field("saveWorkout", {
        type: "SavedWorkout",
        args: {
          id: stringArg(),
          slug: stringArg()
        },
        async resolve(_: any, args: any, context: any) {
          const workout = await context.prisma.workout.findUnique({
            where: { id: args.id },
          });
  
          await context.prisma.user.update({
            where: {
              id: args.id,
            },
            data: {
              savedWorkouts: {
                connect: {
                  id: workout.id,
                },
              },
            },
          });
          return workout;
        },
      });
    },
  });