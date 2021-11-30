import { BigNumber } from "bignumber.js";

export const ZERO = new BigNumber("0");
export const ONE = new BigNumber("1");

/** value == 0 */
export function isZero(value) {
  return value === 0 || value === "0" || new BigNumber(value).isZero();
}

/** a > b */
export function isGreaterThan(a, b) {
  return new BigNumber(a).isGreaterThan(b);
}

/** a < b */
export function isLessThan(a, b) {
  return new BigNumber(a).isLessThan(b);
}

/** 10 ** n */
export function pow10(n, m) {
  return new BigNumber(10).pow(n, m);
}

export function formatCurrency(value, precision = 2, sign = "") {
  if (value === "0" || !value) return "0";
  const balance = new BigNumber(value);
  const fixedBalance = balance.gt(1)
    ? balance.toFixed(precision)
    : balance.toPrecision(precision);
  return `${sign}${
    precision === 0
      ? fixedBalance.replace(/\B(?=(\d{3})+(?!\d))/g, "$&,")
      : fixedBalance.replace(/\d(?=(\d{3})+\.)/g, "$&,")
  }`;
}

export function formatBalance(rawValue, decimals, significant = decimals) {
  if (rawValue === "0" || !rawValue) return "0";
  let balance = new BigNumber(rawValue);
  if (balance.isNaN()) return "0";
  const negative = balance.isNegative(); // balance < 0n
  const base = pow10(decimals); // 10n ** decimals

  if (negative) balance = balance.absoluteValue(); // balance * -1n

  let fraction = balance.modulo(base).toString(10); // (balance % base).toString(10)

  // add leading zeros
  while (fraction.length < decimals) fraction = `0${fraction}`;

  // match significant digits
  const matchSignificantDigits = new RegExp(
    `^0*[1-9]\\d{0,${significant > 0 ? significant - 1 : 0}}`
  );
  fraction = fraction.match(matchSignificantDigits)?.[0] ?? "";

  // trim tailing zeros
  fraction = fraction.replace(/0+$/g, "");

  const whole = balance.dividedToIntegerBy(base).toString(10); // (balance / base).toString(10)
  const value = `${whole}${fraction === "" ? "" : `.${fraction}`}`;

  const raw = negative ? `-${value}` : value;
  return raw.includes(".") ? raw.replace(/0+$/, "").replace(/\.$/, "") : raw;
}

export function formatEthereumAddress(address, size = 0) {
  if (size === 0 || size >= 20) return address;
  return `${address.substr(0, 2 + size)}...${address.substr(-size)}`;
}
