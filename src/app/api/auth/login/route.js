import clientPromise from "../../../../libs/dbConnect";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // validation
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // MongoDB connect
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const usersCollection = db.collection("users");

    // check if user exists
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        { status: 400 }
      );
    }

    // compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        { status: 400 }
      );
    }

    // success
    return new Response(
      JSON.stringify({ message: "Login successful", user: { name: user.name, email: user.email, image: user.image } }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}
