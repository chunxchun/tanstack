import { useNavigate } from "@tanstack/react-router";
import { OrganizationSwitcher } from "@/components/auth/organization/organization-switcher";

export function Header() {
  const navigate = useNavigate();
  return (
    <OrganizationSwitcher
      setActive={(organization) => {
        navigate({
          to: organization ? `/organization/${organization.slug}/dashboard` : "/dashboard",
        });
      }}
    />
  );
}
