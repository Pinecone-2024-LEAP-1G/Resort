"use client";

import HomeCard from "@/components/HomeCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Categories } from "@/components/Category/Categories";
import { useSearchParams } from "next/navigation";

import { PropertyType } from "@/components/Review";
import { toast } from "sonner";

import { SkeletonHomeCard } from "@/components/Skeletons/SkeletonHomeCard";

const Home = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const address = searchParams.get("address");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const guests = searchParams.get("guests");
  const [properties, setProperties] = useState<PropertyType[] | []>([]);
  const [filterProperty, setFilterProperty] = useState<PropertyType[] | []>([]);
  const adress = searchParams.get("adress");
  const [footerP, setFooterP] = useState<PropertyType[]>();
  const [sliceCard, setSliceCard] = useState(8);
  const [sliceProperty, setSliceProperty] = useState<PropertyType[]>([]);
  const [hideButton, setHideButton] = useState(false);
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
        setLoading(false);
        setSliceProperty(response?.data.property);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getProperties();
  }, [guests, from, to, address, sliceCard]);
  const slicee = filterProperty?.splice(sliceCard);
  const filteredAndSortedProperties = sliceProperty
    .filter((filterProperty) => filterProperty?.reviewId?.length >= 0)
    .sort((a, b) => b.reviewId.length - a.reviewId.length);

  const more = () => {
    setSliceCard((prev) => prev + 8);
  };

  const slicePro = filteredAndSortedProperties?.splice(sliceCard);
  const changePropertyCategory = (id: string) => {
    const filterProperties = sliceProperty?.filter(
      (property) => property?.categoryId === id,
    );
    setFilterProperty(filterProperties || []);
  };
  return (
    <div className="mb-10 mt-10">
      {adress ? (
        <div className="grid grow gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {footerP?.map((property, index) => {
            if (footerP.length === 0)
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
      ) : (
        <div className="">
          <Categories
            onClick={(id) => changePropertyCategory(id)}
            allProperties={() => setFilterProperty(properties)}
          />
          <div className="grid grow gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {loading
              ? Array(10)
                  .fill(null)
                  .map((_, index) => <SkeletonHomeCard key={index} />)
              : filterProperty?.map((property, index) => {
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
