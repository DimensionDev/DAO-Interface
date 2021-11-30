export function createTabSelectorStyle(mode, value, index) {
  const color =
    value === index
      ? mode === "light"
        ? "text-gray-900"
        : "text-white"
      : mode === "light"
      ? "text-gray-500"
      : "text-gray-400";
  return color;
}

export function createSubTabSelectorStyle(mode, value, index) {
  return `${createTabSelectorStyle(
    mode,
    value,
    index
  )} min-h-0 min-w-0 p-0 mr-3`;
}
