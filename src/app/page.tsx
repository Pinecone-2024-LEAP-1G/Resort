"use client";
import HomeCard from "@/components/HomeCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Categories } from "@/components/Category/Categories";
import { useSearchParams } from "next/navigation";
import { PropertyType } from "@/components/Review";
import { toast } from "sonner";

const Home = () => {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  const [properties, setProperties] = useState<PropertyType[] | []>([]);
  const [filterProperty, setFilterProperty] = useState<PropertyType[] | []>([]);
  const [filterProperty2, setFilterProperty2] = useState<
    PropertyType[] | undefined
  >([]);
  const adress = searchParams.get("adress");
  const [footerP, setFooterP] = useState<PropertyType[]>();

  useEffect(() => {
    const getaddressProperty = async () => {
      try {
        const response = await axios.get(
          `/api/properties/address/?adress=${adress}`,
        );

        setFooterP(response.data.properties);
      } catch (error) {
        console.log(error);

        toast.error("error");
      }
    };
    getaddressProperty();
  }, [adress]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await axios.get(
          `/api/properties/searchProperties?address=${address}&from=${from}&to=${to}&guests=${guests}`,
        );
        setFilterProperty(response?.data.property);
        setProperties(response?.data.property);
      } catch (error) {
        console.log(error);
      }
    };
    getProperties();
  }, [guests, from, to, address]);
  console.log("dv");

  const changePropertyCategory = (id: string) => {
    const filterProperties = properties.filter(
      (property) => property?.categoryId === id,
    );
    const filterProperties2 = footerP?.filter(
      (property) => property?.categoryId === id,
    );
    setFilterProperty(filterProperties);
    setFilterProperty2(filterProperties2);
  };

  const filteredAndSortedProperties = filterProperty
    .filter((filterProperty) => filterProperty.reviewId.length >= 0)
    .sort((a, b) => b.reviewId.length - a.reviewId.length);

  return (
    <div>
      {adress ? (
        <div>
          <Categories
            onClick={(id) => changePropertyCategory(id)}
            allProperties={() => setFilterProperty(properties)}
          />
          <div className="grid grow gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {filterProperty2?.map((property, index) => {
              if (filterProperty.length <= 1)
                return (
                  <div key={index} className="p-10 text-center">
                    Таны хайсан утга олдсонгүй.
                  </div>
                );
              else
                return (
                  <HomeCard
                    key={index}
                    property={property}
                    propertyId={property?._id}
                    propertyPictures={[property?.propertyPictures]}
                  />
                );
            })}
          </div>
        </div>
      ) : (
        <div>
          <Categories
            onClick={(id) => changePropertyCategory(id)}
            allProperties={() => setFilterProperty(properties)}
          />
          <div className="grid grow gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {filteredAndSortedProperties?.map((property, index) => {
              if (filterProperty.length <= 0)
                return (
                  <div key={index} className="p-10 text-center">
                    Таны хайсан утга олдсонгүй.
                  </div>
                );
              else
                return (
                  <HomeCard
                    key={index}
                    property={property}
                    propertyId={property?._id}
                    propertyPictures={[property?.propertyPictures]}
                  />
                );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
