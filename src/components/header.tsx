import { useNavigate } from "@tanstack/react-router";
import { OrganizationSwitcher } from "@/components/auth/organization/organization-switcher";
import { authClient } from "@/lib/auth-client";

export function Header() {
  const navigate = useNavigate();
  const { data: session, isPending, error } = authClient.useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!session) {
    return (
      <div>
        <p>You are not signed in.</p>
        <a href="/auth/sign-in">Sign In</a>
      </div>
    );
  }

  return (
    <OrganizationSwitcher
      hideCreate={session.user.role == "user"}
      setActive={(organization) => {
        navigate({
          to: organization
            ? `/organization/${organization.slug}/dashboard`
            : "/dashboard",
        });
      }}
    />
  );
}
