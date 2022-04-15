import {extendType, list, nonNull, nullable, objectType, stringArg} from "nexus"
import { Exercise } from "./Exercise"

export const Workout = objectType({
    name: "Workout",
    definition(t:any){
        t.string("id"),
        t.string("muscleGroup"),
        t.string("workoutName"),
        t.list.field("exercieses",{
            type: Exercise,
            async resolve(_parent:any, _args:any, context:any){
                return await context.prisma.exercises.findMany()
            }
        })
    }
})


export const FetchAllWorkouts = extendType({
    type: "Query",
    definition(t:any){
        t.nonNull.list.field("fetchAllWorkouts", {
            type: "Workout",
            async resolve(_root:any, _args:any, context:any){
                return context.prisma.workouts.findMany({})
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