import z from "zod";

const requiredString = (fieldName: string) =>
  z.string().min(1, { message: `${fieldName} is required` });

export const subscribeSchema = z.object({
  name: requiredString("Name"),
  email: z.email("Invalid email format"),
});

export type SubscribeDataType = z.infer<typeof subscribeSchema>;
