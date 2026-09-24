import { prisma } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

export async function POST (req : NextRequest) {
    const data = await req.json() ;
    const verifyInputData = z.object({
        petId : z.string() ,
        userId : z.string() ,
        sitterId : z.string() ,
        startDate : z.date() ,
        endDate : z.date()
    }) 

    const inputValidation = verifyInputData.safeParse(data) ;
    if (!inputValidation.success){
        return NextResponse.json({
            success : false ,
            msg : "Invalid Input Data"
        }, {
            status : 401
        })
    }

    try {
        const checkBooking = await prisma.bookings.findFirst({
            where : {
                start_date : data.startDate ,
                
            }
        }) ;
        if (!checkUser){
            return NextResponse.json({
                success : false ,
                msg : "User DoesNot Exist"
            }, {
                status : 401
            })
        }

        
    } catch (error) {
        
    }
}