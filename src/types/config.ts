import { z } from "zod";

export const CardConfigSchema = z.object({
  type: z.string(),
  title: z.string().optional().default("Home Energy"),

  home: z
    .object({
      consumption_entity: z.string().optional(),
      show_self_consumption: z.boolean().optional().default(true),
    })
    .optional()
    .default({}),

  grid: z
    .object({
      power_entity: z.string().optional(),
    })
    .optional()
    .default({}),

  solar: z
    .object({
      power_entity: z.string().optional(),
      daily_entity: z.string().optional(),
    })
    .optional()
    .default({}),

  battery: z
    .object({
      display_name: z.string().optional().default("libbi"),
      provider: z
        .enum(["ha-entity", "selectronic", "rest", "mqtt"])
        .optional()
        .default("ha-entity"),
      power_entity: z.string().optional(),
      soc_entity: z.string().optional(),
      capacity_kwh: z.number().optional(),
      rest_sensor: z.string().optional(),
    })
    .optional(),

  devices: z
    .object({
      zappi: z
        .object({
          serial: z.union([z.string(), z.number()]).optional(),
        })
        .optional(),
      eddi: z
        .object({
          serial: z.union([z.string(), z.number()]).optional(),
        })
        .optional(),
    })
    .optional()
    .default({}),

  display: z
    .object({
      flow_animation_speed: z
        .enum(["auto", "fast", "slow", "off"])
        .optional()
        .default("auto"),
    })
    .optional()
    .default({}),
});

export type CardConfig = z.infer<typeof CardConfigSchema>;
