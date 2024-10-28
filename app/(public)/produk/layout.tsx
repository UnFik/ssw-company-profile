import Footer from "@/components/footer";
import { NavbarGeneral } from "@/components/navbar";
import React from "react";

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <NavbarGeneral />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
