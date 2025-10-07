import clientPromise from "../../../libs/dbConnect"
import { NextResponse } from "next/server";


export async function GET(){
    const client = await clientPromise
    const db= client.db("opinix")
    const services = await db.collection("services").find({}).toArray()
    return NextResponse.json(services)
}



export async function POST(req) {
  try {
    // 1️⃣ Get request body
    const body = await req.json();

    // 2️⃣ Connect to database
    const client = await clientPromise;
    const db = client.db("opinix");

    // 3️⃣ Insert the data
    await db.collection("services").insertOne(body);

    // 4️⃣ Send success response
    return NextResponse.json({
      success: true,
      message: "Service added successfully",
      data: body,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}