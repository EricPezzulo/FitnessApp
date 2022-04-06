import {extendType, nonNull, objectType, stringArg} from "nexus"

export const Workout = objectType({
    name: "Workout",
    definition(t:any){
        t.string("id"),
        t.string("muscleGroup"),
        t.string("workoutName"),
        t.list.field("exercises",{
            type: Workout,
            async resolve(parent: any, _args:any, context:any){
                return await context.prisma.workout
                .findUnique({
                    where: {
                        id:parent.id
                    }
                }).exercises()
            }
        })
    }
})
export const FetchAllWorkouts = extendType({
    type: "Query",
    definition(t:any){
        t.nonNull.field("fetchAllWorkouts", {
            type: "Workout",
            async resolve(_root:any, _args:any, context:any){
                return await context.prisma.workout.findMany()
            }
        })
    }
})
export const FetchWorkout = extendType({
    type:"Query",
    definition(t:any){
        t.nonNull.field("fetchWorkout",{
            type:"Workout",
            args: {
                id: nonNull(stringArg())
            },
            async resolve(_root:any, args:any, context:any){
                return await context.prisma.user.findMany({
                    where:{
                        id:args.id
                    }
                })
            }
        })
    }
})