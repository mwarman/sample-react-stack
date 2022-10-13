import * as Yup from "yup";

const configSchema = Yup.object({
  NODE_ENV: Yup.string().default("development"),
  REACT_APP_API_DELAY_MS: Yup.number().min(0).max(15000).default(2000),
  REACT_APP_TOAST_AUTODISMISS_MS: Yup.number().min(0).max(30000).default(5000),
});

const config = configSchema.validateSync(process.env, {
  abortEarly: false,
  stripUnknown: true,
});

export default config;
