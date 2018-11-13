export type FixedSizeArray<T, N extends number> = N extends 0
  ? never[]
  : {
      0: T
      length: N
    } & ReadonlyArray<T>
