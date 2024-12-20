"use client";

import { PropertyType } from "@/components/Review";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const searchParams = useSearchParams();
  const address = searchParams.get("adress");
  const [filter, setFilter] = useState<PropertyType[] | undefined>();

  useEffect(() => {
    const getaddressProperty = async () => {
      try {
        const response = await axios.get(
          `/api/properties/address/?adress=${address}`,
        );

        setFilter(response.data.properties);
      } catch (error) {
        console.log(error);

        toast.error("error");
      }
    };
    getaddressProperty();
  }, [address]);
};
export default Page;
