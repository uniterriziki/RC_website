"use client";
//session is a user controlled state hence it is a client component

import { SessionProvider } from "next-auth/react";

//session provider has to be wrapped in a component in order to be called in server side items
//destructure the provider to pass in property children since the provider is a parent item
const Providers = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
