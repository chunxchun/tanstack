import { Button } from "#/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { getSession } from "#/lib/auth.functions";

export const Route = createFileRoute("/")({
  component: Home,
  // beforeLoad: async () => {
  //   const session = await getSession();
  //   return { session };
  // },
});

function Home() {
  // const { session } = Route.useRouteContext();
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      {/* {!session ? (
        <Button
          onClick={() => {
            console.log("Sign In clicked");
          }}
        >
          Sign In
        </Button>
      ) : (
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      )} */}
    </div>
  );
}
