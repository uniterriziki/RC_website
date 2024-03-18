//this file has no naming convention and may be named otherwise. it is stored in root folder to be accessed globally

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: {
      label: "User Name",
    },
    password: {
      label: "password",
      type: "password",
    },
  },
  async authorize() {
    //hard coded user here to be replaced by what is in db
    if (this.credentials.username === "km" && credentials.password === "123")
      return {
        name: "Kelly",
      };
    else return null;
  },
});

const config = {
  providers: [Google, credentialsConfig],
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
