import axios from "axios";
import { useEffect, useState } from "react";

type Property = {
  _id: string;
  address: string;
};
export const PropertyLocationSearch = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/properties",
        );
        // console.log(response.data);
        setProperties(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProperties();
  }, []);
  return (
    <div>
      {properties.map((property) => {
        return <div key={property._id}>{property.address}</div>;
      })}
    </div>
  );
};
