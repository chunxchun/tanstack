import { ensureSession as ensureSessionClient } from "@better-auth-ui/react";
import { ensureSession as ensureSessionServer } from "@better-auth-ui/react/server";

import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
// import { getSession } from "@/lib/auth.functions";

export const Route = createFileRoute("/dashboard1")({
  beforeLoad: async ({ context: { queryClient }, location }) => {
     const ensureSession = createIsomorphicFn()
      .server(() =>
        ensureSessionServer(queryClient, auth, {
          headers: getRequestHeaders(),
        }),
      )
      .client(() => ensureSessionClient(queryClient, authClient));

    const session = await ensureSession();
    
    if (!session) {
      throw redirect({
        to: "/auth/$path",
        params: { path: "sign-in" },
        search: { redirectTo: location.href },
      });
    }
    
    return { session };
  },
  // async beforeLoad({ context: { queryClient }, location }) {
  //   const ensureSession = createIsomorphicFn()
  //     .server(() =>
  //       ensureSessionServer(queryClient, auth, {
  //         headers: getRequestHeaders(),
  //       }),
  //     )
  //     .client(() => ensureSessionClient(queryClient, authClient));
  //   const session = await ensureSession();
  //   if (!session) {
  //     throw redirect({
  //       to: "/auth/$path",
  //       params: { path: "sign-in" },
  //       search: { redirectTo: location.href },
  //     });
  //   }
  //   return { session };
  // },

  // beforeLoad: async () => {
  //   const session = await getSession();
  //   if (!session) {
  //     throw redirect({ to: "/login" });
  //   }
  //   return { user: session.user };
  // },
  component: Dashboard,
});

function Dashboard() {
  const { session } = Route.useRouteContext();
  return (
    <div className="flex flex-col items-center my-auto">
      <h1 className="text-2xl">Hello, {session.user.email}</h1>
      <pre>{JSON.stringify(session.user.role, null, 2) }</pre>
      <Link to="/auth/$path" params={{ path: "sign-out" }}>
        Sign Out
      </Link>
    </div>
  );
}
