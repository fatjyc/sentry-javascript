export type NestedArray<T> = Array<NestedArray<T> | T>;

/** Flattens a multi-dimensional array */
export function flatten<T>(input: NestedArray<T>): T[] {
  const result: T[] = [];

  const flattenHelper = (input: NestedArray<T>): void => {
    input.forEach((el: T | NestedArray<T>) => {
      if (Array.isArray(el)) {
        flattenHelper(el as NestedArray<T>);
      } else {
        result.push(el as T);
      }
    });
  };

  flattenHelper(input);
  return result;
}
