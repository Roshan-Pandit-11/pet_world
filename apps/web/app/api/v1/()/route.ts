import { prisma } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import z from "zod" ;

export async function POST(req : NextRequest) {
    const data = await req.json() ;
    const listingData = z.object({
        availability : z.array(z.date()) ,
        location     : z.string()
    })

    const vallidateListingData = listingData.safeParse(data) ;

    if (!vallidateListingData.success){
        return NextResponse.json({
            success : false ,
            msg : "Invalid Details"
        } , {
            status : 400
        })
    }

    try {
        const checkEmailExist = await prisma.user.findFirst({
            where : {
                email : data.email
            }
        }) ;
        if (checkEmailExist) {
            return NextResponse.json({
                success : false ,
                msg : "Email Already Registered"
            } , {
                status : 400
            })
        }

        const addListing = await prisma.listing.create({
            data : {
                availability : data.availability ,
                location : data.location
            }
        })
        if (addListing){
            return NextResponse.json({
                success : true ,
                ListingDetails : addListing
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