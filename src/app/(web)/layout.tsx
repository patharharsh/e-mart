import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      <div className="md:p-0 p-2">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
