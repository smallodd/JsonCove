import { siteConfig } from "@/lib/site-config";

export function resolveMonacoVsURL(configuredURL: string, origin: string) {
  return new URL(configuredURL, origin).href.replace(/\/+$/, "");
}

// Monaco passes this path into its worker, where root-relative URLs cannot be fetched.
export const vsURL =
  typeof window === "undefined"
    ? siteConfig.monacoVsUrl
    : resolveMonacoVsURL(siteConfig.monacoVsUrl, window.location.origin);
export const loaderURL = `${vsURL}/loader.js`;
