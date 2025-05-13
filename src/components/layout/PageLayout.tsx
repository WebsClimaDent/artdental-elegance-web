
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackButton from "../common/BackButton";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
}

const PageLayout = ({ children, title, showBackButton = true }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {showBackButton && (
          <div className="container-custom pt-24 pb-2">
            <BackButton />
          </div>
        )}
        {title && (
          <div className="container-custom pt-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white">{title}</h1>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
