//This file runs in front of every reuest made in our application
import { NextRequest } from "next/server";
import { updateSession } from "./lib/actions/authAction";

export async function middleware() {
  return await updateSession(NextRequest);
}
