import crypto from "node:crypto";

export const generateID = (prefix, length = 5) => {
  const suffix = crypto.randomUUID().replace(/-/g, "");
  const base36 = BigInt(`0x${suffix}`).toString(36);

  return `${prefix}-${base36.slice(0, length)}`;
};
