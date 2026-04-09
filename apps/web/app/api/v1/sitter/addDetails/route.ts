import { prisma } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import z from "zod" ;

export async function POST(req : NextRequest) {
    const data = await req.json() ;
    const userdata = z.object({
        experience : z.number() ,
        homeDetails : z.string().optional() ,
        pricePerDay  : z.number() 
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

        const addSitterDetails = await prisma.sitter.create({
            data : {
                experience : data.experience ,
                home_details : data.homeDetails ,
                price_per_day : data.pricePerDay
            }
        })
        if (addSitterDetails){
            return NextResponse.json({
                success : true ,
                sitterDetails : addSitterDetails
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