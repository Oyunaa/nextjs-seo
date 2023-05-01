import React, { ReactNode } from "react";
import Meta from "./Meta";
import { IMeta } from "./Meta";

const Layout = ({ children }: { children?: ReactNode }) => {
  const metaData: IMeta = {
    title: "TRAVEL NEXT",
    description:
      "Italy wants to build the world’s longest suspension bridge. The Mafia and geography might make that difficult",
    site_name: "NEXT WEBSITE",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  };
  return (
    <>
      <Meta metaData={metaData} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
      <footer>@2023</footer>
    </>
  );
};

export default Layout;
