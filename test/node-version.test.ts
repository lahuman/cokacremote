import { describe, expect, it } from "vitest";
import { isSupportedNodeVersion } from "../src/node-version.js";

describe("October 2026 patched Node.js versions", () => {
  it.each(["22.23.4", "v22.23.4", "22.24.0", "24.22.1", "24.23.0", "26.12.1", "26.13.0"])("accepts %s", (version) => {
    expect(isSupportedNodeVersion(version)).toBe(true);
  });
  it.each(["20.20.0", "22.23.3", "22.22.99", "23.11.0", "24.22.0", "24.21.99", "25.9.0", "26.12.0", "26.11.99", "27.0.0", "26.12.1-rc.1", "invalid"])("rejects %s", (version) => {
    expect(isSupportedNodeVersion(version)).toBe(false);
  });
});
