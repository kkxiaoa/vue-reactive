export class Watcher {
  constructor(
    protected readonly expOrFn: WatchSource,
    protected readonly cb: WatchCallback,
    protected readonly options: WatchOptions
  ) {
    if (typeof expOrFn === "function") {
    }
  }
}
