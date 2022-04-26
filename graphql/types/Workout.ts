import {extendType, list, nonNull, nullable, objectType, stringArg} from "nexus"
import { User } from "./User"

export const SavedWorkout = objectType({
    name: "SavedWorkout",
    definition(t:any){
        t.string("id"),
        t.string("name"),
        t.string("slug"),
        t.list.field("savedBy", {
            type: User,
            async resolve (parent:any, _args:any, context: any){
                return await context.prisma.workout.findUnique({
                    where: {
                        id: parent.id
                    }
                }).savedBy()
            }

        })
        
    }
})


