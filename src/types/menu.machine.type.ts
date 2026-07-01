import type * as z from "zod";
import type {
	insertMenuMachineZodSchema,
	selectMenuMachineZodSchema,
	updateMenuMachineZodSchema,
} from "@/zod/menu.machine.zod.schema";

export type InsertMenuMachineType = z.infer<typeof insertMenuMachineZodSchema>;
export type UpdateMenuMachineType = z.infer<typeof updateMenuMachineZodSchema>;
export type SelectMenuMachineType = z.infer<typeof selectMenuMachineZodSchema>;
