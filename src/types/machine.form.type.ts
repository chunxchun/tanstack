import type { FormDataDependency } from "@/types/shared.form.type";
import type {
  InsertMachineType,
  SelectMachineType,
  UpdateMachineType,
} from "@/types/machine.type";

export type MachineFormBaseProps = FormDataDependency<"organizations" | "locations">;

type MachineFormCreateProps = {
  mode: "create";
  initialData?: never;
  onSubmit: (values: InsertMachineType) => Promise<void>;
  onCancel: () => void;
  defaultShopId?: number;
} & MachineFormBaseProps;

type MachineFormEditProps = {
  mode: "edit";
  initialData: SelectMachineType;
  onSubmit: (values: UpdateMachineType) => Promise<void>;
  onCancel: () => void;
  defaultShopId?: number;
} & MachineFormBaseProps;

type MachineFormViewProps = {
  mode: "view";
  initialData: SelectMachineType;
  onSubmit?: never;
  onCancel: () => void;
  defaultShopId?: never;
} & MachineFormBaseProps;

export type MachineFormProps =
  | MachineFormCreateProps
  | MachineFormViewProps
  | MachineFormEditProps;
