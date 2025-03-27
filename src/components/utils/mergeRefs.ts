/**
 * Merges multiple React refs into a single ref callback.
 *
 * @param refs - An array of refs which can be mutable ref objects, legacy refs, or undefined/null.
 * @returns A ref callback function that assigns the given value to all provided refs.
 *
 * @typeParam T - The type of the ref value.
 */
export function mergeRefs<T = any>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null>): React.RefCallback<T> {
    return (value) => {
        refs.forEach((ref) => {
            if (typeof ref === "function") {
                ref(value);
            } else if (ref != null) {
                (ref as React.MutableRefObject<T | null>).current = value;
            }
        });
    };
}
