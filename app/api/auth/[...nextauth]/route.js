//catch all api routes from v5 next auth

import { handlers } from "auth"; //check jsconfig.json for the path shortening

//destructure the handlers of HTTP methods
export const { GET, POST } = handlers;
