import type { SelectOrganizationType } from "@/types/organization.type";
import { type ReactFormExtendedApi } from "@tanstack/react-form";
// import type { SelectShopType } from "@/db/schemas/auth-schema";
import FormSelect from "./form-select";

type FormSelectProps<TForm> = {
  form: ReactFormExtendedApi<
    TForm,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >;
  isReadOnly: boolean;
  organizations?: SelectOrganizationType[];
  valueKey: (organization: SelectOrganizationType) => string | number;
  labelKey: (organization: SelectOrganizationType) => string;
  description?: string | null;
  required?: boolean;
  activeOrganization?: SelectOrganizationType | undefined;
  initialData?: SelectOrganizationType | undefined;
};

export default function FormSelectOrganization<TForm>({
  form,
  isReadOnly,
  organizations = [],
  valueKey,
  labelKey,
  description = null,
  required = false,
  activeOrganization = undefined,
  initialData,
}: FormSelectProps<TForm>) {
  return (
    <FormSelect
      form={form}
      name="organizationId"
      label={"Organization"}
      isReadOnly={isReadOnly}
      list={organizations}
      valueKey={valueKey}
      labelKey={labelKey}
      description={description}
      required={required}
      initialValue={
        activeOrganization
          ? organizations?.find((org) => org.id === activeOrganization.id)?.name
          : organizations?.find((org) => org.id === initialData?.id)?.name
      }
    />
  );
}
