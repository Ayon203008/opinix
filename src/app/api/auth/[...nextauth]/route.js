import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../../libs/dbConnect";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found");

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordCorrect) throw new Error("Password incorrect");

        // return user object (without password)
        return {
          name: user.name,
          email: user.email,
          image: user.image || null,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
