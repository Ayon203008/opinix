import Image from "next/image";
import Link from "next/link";
import React from "react";
async function getServices() {
  const res = await fetch("http://localhost:3000/api/services/limited", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch the service");
  }
  return res.json();
}
export default async function LandingServices() {
  const services = await getServices();

  return (
    <div>
      <div className="mx-auto w-11/12">
        <div className="p-8 min-h-screen">
          <h1 className="text-4xl font-bold text-center mb-12">Premium Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-60">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold mb-2 text-gray-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-4 space-y-1 text-sm text-gray-500">
                    <p>
                      <span className="font-semibold text-gray-700">
                        Company:
                      </span>{" "}
                      {service.companyName}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        Email:
                      </span>{" "}
                      {service.email}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-5 border-t flex items-center justify-between gap-2">
                  <p className="text-lg font-bold text-green-600">
                    ${service.price}
                  </p>

                  <div className="flex gap-2">
                    <Link
                      href={`/all-services/${service._id}`} // internal details page
                      className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                    >
                      View Details
                    </Link>
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
