import clientPromise from "../../../libs/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function ServiceDetails({ params }) {
  const { id } = params;

  const client = await clientPromise;
  const db = client.db("opinix");

  const service = await db
    .collection("services")
    .findOne({ _id: new ObjectId(id) });

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <Image
        src={service.image}
        alt={service.title}
        width={800}
        height={500}
        className="rounded-lg"
      />
      <p className="mt-4 text-gray-700">{service.description}</p>
      <p className="mt-2 font-semibold">Company: {service.companyName}</p>
      <p className="text-sm text-gray-500">Category: {service.category}</p>
      <p className="mt-1 text-blue-600">
        Website:{" "}
        <a href={service.website} target="_blank" rel="noopener noreferrer">
          {service.website}
        </a>
      </p>
      <p className="mt-1 text-sm">Email: {service.email}</p>
      <p className="mt-2 font-bold text-green-600">Price: ${service.price}</p>
    </div>
  );
}
