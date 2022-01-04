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

export const boxBackgroundColorMapping = {
  light: "bg-gray-dao-header-box-light",
  dim: "bg-gray-dao-header-box-dim",
  dark: "bg-gray-dao-header-box-dark",
};

export const borderColorMapping = {
  light: "border-gray-200",
  dim: "border-gray-600",
  dark: "border-gray-700",
};

export const subTextColorMapping = {
  light: "text-gray-600",
  dim: "text-gray-400",
  dark: "text-gray-400",
};

export const primaryTextColorMapping = {
  light: "text-gray-900",
  dim: "text-gray-100",
  dark: "text-gray-100",
};
