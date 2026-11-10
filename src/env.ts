import { defineEnvVars } from "@sveltejs/kit/env";

const optional = (value: string | undefined) => value;

export const variables = defineEnvVars({
  SENDER_HOST: { schema: optional, description: "SMTP host used by the contact form" },
  SENDER_PORT: { schema: optional, description: "SMTP port used by the contact form" },
  SENDER_EMAIL: { schema: optional, description: "SMTP username / from address" },
  SENDER_PASSWORD: { schema: optional, description: "SMTP password" },
});
