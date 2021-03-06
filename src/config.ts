import { IConfig } from "@clarity-types/config";
import { mapProperties } from "./utils";

// Default configuration
export let config: IConfig = {
  plugins: ["viewport", "layout", "pointer", "performance", "errors"],
  uploadUrl: "",
  urlBlacklist: [],
  delay: 500,
  batchLimit: 100 * 1024, // 100 kilobytes
  totalLimit: 20 * 1024 * 1024,  // 20 megabytes
  reUploadLimit: 1,
  disableCookie: false,
  showText: false,
  showLinks: false,
  showImages: false,
  sensitiveAttributes: [],
  timeToYield: 50,
  instrument: false,
  uploadHandler: null,
  uploadHeaders: {
    "Content-Type": "application/json"
  },
  customInstrumentation: null,
  debug: false,
  validateConsistency: false,
  backgroundMode: false
};

export function resetConfig(): void {
  mapProperties(defaultConfig, null, false, config);
}

let defaultConfig: IConfig = {};
mapProperties(config, null, false, defaultConfig);
