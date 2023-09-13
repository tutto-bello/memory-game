import React, { Dispatch, SetStateAction } from "react";
import FooterComponent from "./footer-component";
import HeaderComponent from "./header-component";
import Image from "next/image";

interface LayoutComponentProps {
  children: React.ReactNode;
  setLimit: Dispatch<SetStateAction<number>>;
}

const LayoutComponent = (props: LayoutComponentProps) => {
  const { children, setLimit } = props;
  return (
    <div className="relative h-full">
      <Image
        src="/table-bg.jpg"
        alt="Table"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="min-h-screen"
      />
      <HeaderComponent setLimit={setLimit} />
      <div className="container mx-auto">{children}</div>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;