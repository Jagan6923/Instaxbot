// SuspenseComponent.js
import React, { ReactNode } from "react";
import instagif from "./instagif.gif";

interface Props {
  children: ReactNode;
}

<<<<<<< HEAD
const SuspenseComponent = ({ children }: Props) => {
=======
const SuspenseComponent: React.FC<Props> = ({ children }) => {
>>>>>>> da341b17a36f952424b5ab08ffc0068c22507a10
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
