"use client";
import HomeCard from "@/components/HomeCard";
import { Property } from "@/lib/models";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Categories } from "@/components/Category/Categories";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Home = () => {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  const [properties, setProperties] = useState<Property[] | []>([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/properties/searchProperties?address=${address}&from=${from}&to=${to}&guests=${guests}`,
        );

        setProperties(response?.data.property);
      } catch (error) {
        console.log(error);
      }
    };

    getProperties();
  }, [guests, from, to, address]);

  return (
    <div>
      {/* <Categories /> */}
      <div className="grid grow grid-cols-6 gap-8">
        {properties?.map((property, index) => {
          if (properties[0].length === 0)
            return (
              <div key={index} className="p-10 text-center">
                Tanii haisan utga oldsongvi
              </div>
            );
          else
            return (
              <Link key={property._id} href={`/property/${property._id}`}>
                <HomeCard
                  key={index}
                  property={property}
                  propertyPictures={[property?.propertyPictures]}
                />
              </Link>
            );
        })}
      </div>
    </div>
  );
};

export default Home;
