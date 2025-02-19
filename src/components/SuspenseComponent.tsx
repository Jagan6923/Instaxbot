// SuspenseComponent.js
import React, { ReactNode } from "react";
import instagif from "./instagif.gif";

interface Props {
  children: ReactNode;
}

const SuspenseComponent: React.FC<Props> = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <img src={instagif} alt="Loading..." />
        </div>
      }
    >
      {children}
    </React.Suspense>
  );
};

export default SuspenseComponent;
