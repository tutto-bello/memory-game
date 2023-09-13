import React from "react";

const FooterComponent = () => {
  return (
    <div className="relative container mx-auto text-center p-6 px-3">
      <p className="text-black text-sm">
        {`${new Date().getFullYear()} | tuttobello™`}
      </p>
    </div>
  );
};

export default FooterComponent;
