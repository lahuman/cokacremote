// Minimum patched versions from the October 2026 Node.js security release.
export function isSupportedNodeVersion(version: string): boolean {
  const match = /^v?(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) return false;
  const [, majorText, minorText, patchText] = match;
  const major = Number(majorText);
  const minor = Number(minorText);
  const patch = Number(patchText);
  const minimum = new Map([[22, [23, 4]], [24, [22, 1]], [26, [12, 1]]]).get(major);
  return minimum !== undefined && (minor > minimum[0]! || (minor === minimum[0] && patch >= minimum[1]!));
}
