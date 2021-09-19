import {DependencyList, useCallback} from "react"

export function useProxyCallback<E, V>(
  override: (e: E) => V,
  base: ((e: E) => V) | undefined,
  deps: DependencyList,
) {
  return useCallback((event: E): V => {
    const temp = override(event)
    if (base) {
      return base(event)
    }
    return temp
  }, [override, base].concat(deps))
}
