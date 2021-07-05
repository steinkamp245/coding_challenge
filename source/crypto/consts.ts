import { join } from "path";

export const PROJECT_ROOT_PATH = join(__dirname, "..", "..");
export const KEY_PATH = join(PROJECT_ROOT_PATH, "secret.key");
export const AUTH_PATH = join(PROJECT_ROOT_PATH, "auth.txt");
export const IV_PATH = join(PROJECT_ROOT_PATH, "iv.txt");
export const SECRET_ENC_PATH = join(PROJECT_ROOT_PATH, "secret.enc");
export const SECRET_PATH = join(PROJECT_ROOT_PATH, "secret.txt");