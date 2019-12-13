export type Predicate<T> = (T) => boolean;
export type Comparator<T> = (T, T) => number;
export type Operator<T, U> = (T) => U;
export type Aggregator<T, U> = (U, T) => U;
export type Effect<T> = (T) => void;