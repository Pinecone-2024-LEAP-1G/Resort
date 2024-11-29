import { Button } from "../ui/button";

export const PropertyOverView = () => {
  const steps = [
    {
      id: 1,
      title: "Tell us about your place",
      description:
        "Share some basic info, like where it is and how many guests can stay.",
      image:
        "https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg",
    },
    {
      id: 2,
      title: "Make it stand out",
      description:
        "Add 5 or more photos plus a title and description—we’ll help you out.",
      image:
        "https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg",
    },
    {
      id: 3,
      title: "Finish up and publish",
      description:
        "Choose a starting price, verify a few details, then publish your listing.",
      image:
        "https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg",
    },
  ];

  return (
    <div className="m-0 p-0">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="h-32 w-[514px] text-[56px] text-[#222222]">
            {"It's easy to get started on Airbnb"}
          </h1>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <ol className="space-y-6">
            {steps.map((step) => (
              <li key={step.id} className="flex items-start space-x-4">
                <div className="text-2xl font-bold text-gray-800">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-[22px] font-medium">{step.title}</h3>
                  <p className="text-lg text-[#6a6a6a]">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div>
            {steps.map((step) => (
              <div key={step.id} className="h-[120px] w-[120px]">
                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className="h-[120px] w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button className="flex justify-end">Get Started</Button>
    </div>
  );
};
