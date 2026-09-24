import { prisma } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {

    try {

        const getListings = await prisma.listing.findMany() ;
        if (getListings){
            return NextResponse.json({
                success : true ,
                ListingDetails : getListings
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