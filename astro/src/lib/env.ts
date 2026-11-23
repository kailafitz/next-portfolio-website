import path from "node:path";
import { loadEnv } from "vite";

const envDir = path.resolve(process.cwd(), "..");
const mode = process.env.NODE_ENV || "development";
const loaded = {
  ...loadEnv(mode, envDir, "NEXT_PUBLIC_"),
  ...loadEnv(mode, envDir, "PUBLIC_"),
  ...loadEnv(mode, envDir, "DRIBBBLE_"),
};

export function env(name: string) {
  return loaded[name] || process.env[name] || "";
}
