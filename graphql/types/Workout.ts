import {extendType, list, nonNull, objectType, stringArg} from "nexus"

export const Workout = objectType({
    name: "Workout",
    definition(t:any){
        t.string("id"),
        t.string("muscleGroup"),
        t.string("workoutName"),
        t.field("main",{
            type: list('String'),
            async resolve(parent:any, _args:any, context:any){
                return await context.prisma.workout.findMany()
            }
        })
        // t.list.field("warmup",{
        //     type: Workout,
        //     async resolve(parent: any, _args:any, context:any){
        //         return await context.prisma.workout
        //         .findUnique({
        //             where: {
        //                 id:parent.id
        //             }
        //         }).warmup()
        //     }
        // })
    }
})
export const Main = objectType({
    name: "Main",
    definition(t:any){
        t.string("main")
    }
})

export const FetchAllWorkouts = extendType({
    type: "Query",
    definition(t:any){
        t.nonNull.list.field("fetchAllWorkouts", {
            type: "Main",
            async resolve(_root:any, _args:any, context:any){
                return await context.prisma.workout.findMany()
            }
        })
    }
})
export const FetchWorkout = extendType({
    type:"Query",
    definition(t:any){
        t.nonNull.list.field("fetchWorkout",{
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