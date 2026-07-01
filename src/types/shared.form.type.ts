import type { SelectDeliveryType } from "@/types/delivery.type";
import type { SelectDisposeType } from "@/types/dispose.type";
import type { SelectFoodItemType } from "@/types/food-item.type";
import type { SelectInventoryType } from "@/types/inventory.type";
import type { SelectLocationType } from "@/types/location.type";
import type { SelectMachineType } from "@/types/machine.type";
import type { SelectOrganizationType } from "@/types/organization.type";
import type { SelectSaleType } from "@/types/sale.type";
import type { SelectUserType } from "@/types/user.type";

export type DataDependency = {
  deliveries: SelectDeliveryType[];
  disposes: SelectDisposeType[];
  foodItems: SelectFoodItemType[];
  inventories: SelectInventoryType[];
  locations: SelectLocationType[];
  machines: SelectMachineType[];
  sales: SelectSaleType[];
  organizations: SelectOrganizationType[];
  users: SelectUserType[];
};

export type FormDataDependency<K extends keyof DataDependency> = Pick<
  DataDependency,
  K
>;

type BaseDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCancel: () => void;
};

export type ViewDialogProps<I> = BaseDialogProps & {
  initialData: I;
};

export type EditDialogProps<I> = BaseDialogProps & {
  initialData: I;
  // onSubmit: (values: E) => Promise<void>;
};

export type CreateDialogProps = BaseDialogProps;

export type DeleteDialogProps<T> = BaseDialogProps & {
  data: T;
  onDelete: () => Promise<void>;
};
