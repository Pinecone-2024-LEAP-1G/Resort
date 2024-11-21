import HomeCard from "@/components/HomeCard";

const Properties = [
  {
    _id: 1,
    price: 10,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPyluMYN48KYcTZavIMbMFum3WIhsQccmrA&s",
    ],
    location: {
      address: { street: "", state: "", city: "", zipcode: "" },
      geo: { type: "Point", coordinates: ["37.119560", "-113.409010"] },
    },
  },
];

export default async function Home() {
  return (
    <div className="grid grid-cols-6 gap-5">
      {Properties.map((property) => {
        return (
          <HomeCard
            key={property._id}
            price={property.price}
            images={property.images}
          />
        );
      })}
    </div>
  );
}
