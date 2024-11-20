<<<<<<< HEAD
export default async function Home() {
  return <div></div>;
=======
// import { auth } from "@/lib/auth";

import { PriceDetails } from "components/PriceDetails";

export default async function Home() {
  //   const session = await auth();
  //   if (session) {
  //     return <p>Signed in as {session?.user?.email}</p>;
  //   }

  return (
    <div>
      <PriceDetails />
    </div>
  );
>>>>>>> e6e4129 (price detail)
}
