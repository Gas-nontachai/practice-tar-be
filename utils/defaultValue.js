const withDefault = (value, defaultValue = "N/A") => {
  if (typeof value !== "string") return defaultValue;
  return value.trim() === "" ? defaultValue : value;
};

export { withDefault };
