// middleware.js
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // redirect unauthenticated users to /login
  },
});

export const config = {
  matcher: ["/dashboard/add-products"], // protect /add-product route
};
