export const enum ReactiveFlags {
  RAW = "__v_raw",
  REACTIVE = "__v_reactive"
}

interface Target {
  [ReactiveFlags.RAW]?: any;
  [ReactiveFlags.REACTIVE]?: any;
}

export const isNative = (Ctor: unknown): boolean => {
  return typeof Ctor === "function" && /native code/.test(Ctor.toString());
};

export const hasSymbol =
  typeof Symbol !== "undefined" &&
  isNative(Symbol) &&
  typeof Reflect !== "undefined" &&
  isNative(Reflect.ownKeys);

export const createSymbol = (name: string) => {
  return hasSymbol ? Symbol.for(name) : name;
};

export const warn = (msg: string) => console.warn(msg);

export const objectToString = Object.prototype.toString;

export const toTypeString = (value: unknown): string =>
  objectToString.call(value);

export const toRawType = (value: unknown): string => {
  return toTypeString(value).slice(8, -1);
};
export const isPlainObject = (val: unknown): val is object =>
  toTypeString(val) === "[object Object]";

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === "object";

export const isRaw = (value: Target): boolean => {
  return (
    hasOwn(value, ReactiveFlags.RAW) &&
    value[ReactiveFlags.RAW] === ReactiveFlags.RAW
  );
};

export const isReactive = (value: Target): boolean => {
  return (
    Object.isExtensible(value) &&
    hasOwn(value, ReactiveFlags.REACTIVE) &&
    value[ReactiveFlags.REACTIVE] === ReactiveFlags.RAW
  );
};

export const hasOwn = (obj: object, key: string | symbol): boolean =>
  Object.hasOwnProperty.call(obj, key);

export const def = (obj: object, key: string | symbol, value: any) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
