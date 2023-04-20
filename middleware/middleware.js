import { NextResponse } from 'next/server';
import { parseCookies } from 'nookies';

export default function authMiddleware(handler, redirectAuthenticated = null, redirectUnauthenticated = '/login') {
  return async (req, res) => {
    try {
      const cookies = parseCookies({ req });
      const token = cookies.token;
      const isLoginPage = req.url === '/login';
      const isProfilePage = req.url === '/profile';

      if (token && redirectAuthenticated) {
        // Redirect to authenticated page if token exists and user is on login page
        return NextResponse.redirect(redirectAuthenticated);
      }

      if (!token && redirectUnauthenticated && !isLoginPage && !isProfilePage) {
        // Redirect to login page if token doesn't exist and user is not on the login or profile pages
        return NextResponse.redirect(redirectUnauthenticated);
      }

      // Continue with request handling if no redirect is needed
      return handler(req, res);
    } catch (err) {
      console.error(err);
      return NextResponse.error();
    }
  };
}
