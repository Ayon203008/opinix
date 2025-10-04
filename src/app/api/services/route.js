import clientPromise from "../../../libs/dbConnect"
import { NextResponse } from "next/server";


export async function GET(){
    const client = await clientPromise
    const db= client.db("opinix")
    const services = await db.collection("services").find({}).toArray()
    return NextResponse.json(services)
}


