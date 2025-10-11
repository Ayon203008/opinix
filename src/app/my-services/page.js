"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function MyServices() {
  const { data: session, status } = useSession();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/services/my-services")
        .then((res) => res.json())
        .then((data) => {
          setServices(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [status]);

  if (status === "loading") return <p>Loading session...</p>;
  if (!session) return <p>Please login to view your services.</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Services</h1>

      {loading ? (
        <p>Loading services...</p>
      ) : services.length === 0 ? (
        <p>You haven’t added any services yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="font-bold text-xl mb-2">{service.title}</h2>
              <p>{service.description}</p>
              <p className="mt-2 text-gray-500">Price: ${service.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
