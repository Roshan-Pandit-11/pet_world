import { prisma } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import z from "zod" ;

export async function POST(req : NextRequest) {
    const data = await req.json() ;
    const userdata = z.object({
        name : z.string() ,
        type : z.string() ,
        breed    : z.string().optional() ,
        behaviour : z.string() ,
        dietNote : z.string().optional()
    })

    const vallidateUserData = userdata.safeParse(data) ;

    if (!vallidateUserData.success){
        return NextResponse.json({
            success : false ,
            msg : "Invalid Details"
        } , {
            status : 400
        })
    }

    try {

        const addPet = await prisma.pets.create({
            data : {
                pet_name : data.name ,
                type : data.type ,
                breed : data.breed ,
                behaviour : data.behaviour ,
                diet_note : data.dietNote
            }
        })
        if (addPet){
            return NextResponse.json({
                success : true ,
                petDetails : addPet
            } , {
                status : 200
            }) ;
        }
    } catch (error) {
        return NextResponse.json({
            success : false ,
            msg : "DataBase Error" ,
            error
        } , {
            status : 500
        }) ;
    }
}