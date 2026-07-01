import * as z from "zod";
import { R2UploadResponseZodSchema } from "@/zod/shared.zod.schema";

export type R2UploadResponseType = z.infer<typeof R2UploadResponseZodSchema>;
