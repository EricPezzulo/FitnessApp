import { extendType, objectType } from "nexus"

export const Exercise = objectType({
    name: "Exercise",
    definition(t:any){
        t.string("id"),   
        t.string("exercise")
    }
})
     
export const FetchAllExercises = extendType({
    type: "Query",
    definition(t:any){
        t.list.field("fetchAllExercises",{  
            type:"Exercise",
            async resolve(_root:any, _args:any, context:any){
                return context.prisma.exercises.findMany({})
            }
        })
    }
})