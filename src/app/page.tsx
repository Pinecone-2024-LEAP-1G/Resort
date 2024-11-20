// import { auth } from "@/lib/auth";

import Header from "@/components/layout/Header";

export default async function Home() {
  //   const session = await auth();
  //   if (session) {
  //     return <p>Signed in as {session?.user?.email}</p>;
  //   }

  return (
    <div>
      <Header />
    </div>
  );
}
