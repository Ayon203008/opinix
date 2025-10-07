import clientPromise from "../../../../libs/dbConnect"
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    // request থেকে data নেওয়া
    const { name, email, password, image } = await req.json();

    // basic validation
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // MongoDB connect করা
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const usersCollection = db.collection("users");

    // check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists" }),
        { status: 400 }
      );
    }

    // password hash করা
    const hashedPassword = await bcrypt.hash(password, 10);

    // user insert করা MongoDB তে
    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      image: image || null, // যদি image থাকে save করা, না থাকলে null
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "User registered successfully", result }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}
