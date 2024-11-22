"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

type Property = {
  _id: string;
  name: string;
};

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const { propertyId } = useParams<{ propertyId: string }>();

  //   useEffect(() => {
  //     const getCategories = async () => {
  //       try {
  //         const { data } = await axios.get<{ categories: Category[] }>(
  //           "http://localhost:3000/api/properties",
  //         );
  //         setCategories(data.categories);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     getCategories();
  //   }, []);

  return <div></div>;
};
export default Properties;
