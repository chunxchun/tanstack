import { Button } from "#/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { getSession } from "#/lib/auth.functions";
import { UserButton } from "#/components/auth/user/user-button";

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
      <UserButton />
      <Link to="/organization"><Button>Go to Organization</Button></Link>
      <Link to="/dashboard">Go to Dashboard</Link>
      <Link to="/user">Go to User</Link>
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
