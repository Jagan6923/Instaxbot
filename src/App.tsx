// App.js
import React, { useState } from "react";
import { Suspense } from "react";
import SuspenseComponent from "./components/SuspenseComponent";
import instagif from "./components/instagif.gif";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Hero = React.lazy(() => import("./components/Hero"));
const Features = React.lazy(() => import("./components/Features"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const Pricing = React.lazy(() => import("./components/Pricing"));
const UseCases = React.lazy(() => import("./components/UseCases"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const AuthModal = React.lazy(() => import("./components/AuthModal"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  const [authType, setAuthType] = useState<"login" | "signup" | null>(null);

  const handleOpenAuth = (type: "login" | "signup") => {
    setAuthType(type);
  };

  const handleCloseAuth = () => {
    setAuthType(null);
  };

  return (
    <main className="relative">
      <SuspenseComponent>
        <Navbar onOpenAuth={handleOpenAuth} />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <UseCases />
        <About />
        <Contact />
        <Footer />
      </SuspenseComponent>
      {authType && (
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <img src={instagif} alt="Loading..." />
            </div>
          }
        >
          <AuthModal type={authType} onClose={handleCloseAuth} />
        </Suspense>
      )}
    </main>
  );
}

export default App;
