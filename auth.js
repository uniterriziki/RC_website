//this file has not naming convention and may be named otherwise. it is stored in root folder to be accessed globally

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";

const config = {
  providers: [Google]
} 

export const { handlers, auth, signIn, signOut } = NextAuth(config);
