declare interface WatchSource {
  [key: string]: string | Function | Object | Array<unknown>;
}

declare type WatchCallback<V = any, OV = any> = (value: V, oldValue: OV) => any;

declare interface WatchOptions<Immediate = boolean> {
  immediate?: Immediate;
  deep?: boolean;
}
