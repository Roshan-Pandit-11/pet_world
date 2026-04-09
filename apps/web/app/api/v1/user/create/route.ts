import { prisma } from "@repo/database";
import { NextRequest, NextResponse } from "next/server";
import z from "zod" ;
import bcrypt from "bcrypt" ;

export async function POST(req : NextRequest) {
    const data = await req.json() ;
    const userdata = z.object({
        name : z.string() ,
        email : z.email() ,
        phoneNo : z.string().length(10).optional() ,
        password : z.string() ,
        role    : z.string() 
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

        const hashedPassword = bcrypt.hashSync(data.password , 5) ;
        const createUser = await prisma.user.create({
            data : {
                name : data.name ,
                email : data.email ,
                phone_no : data.phone_no ,
                password : hashedPassword ,
                role : "owner" ,
                verified_status : 'basic'
            }
        })
        if (createUser){
            return NextResponse.json({
                success : true ,
                userDetails : createUser
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