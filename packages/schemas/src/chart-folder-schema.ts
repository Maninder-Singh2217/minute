import "server-only";

import type { Prisma } from "@minute/prisma";
import type { ZodType } from "zod";
import { z } from "zod";

export const chartFolderSchema = z.strictObject({
  id: z.string().uuid(),
  chartId: z.string().uuid(),
  folderId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
}) satisfies ZodType<Prisma.ChartFolderUncheckedCreateInput>;

export type ChartFolder = z.infer<typeof chartFolderSchema>;
