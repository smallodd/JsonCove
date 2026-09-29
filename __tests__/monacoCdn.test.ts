import { resolveMonacoVsURL } from "@/lib/editor/cdn";
import { describe, expect, it } from "vitest";

describe("resolveMonacoVsURL", () => {
  it("resolves local assets to an absolute URL for workers", () => {
    expect(resolveMonacoVsURL("/monaco/vs", "http://localhost:3210")).toBe("http://localhost:3210/monaco/vs");
  });

  it("keeps a configured CDN origin", () => {
    expect(resolveMonacoVsURL("https://cdn.example.com/monaco/vs/", "http://localhost:3210")).toBe(
      "https://cdn.example.com/monaco/vs",
    );
  });
});
