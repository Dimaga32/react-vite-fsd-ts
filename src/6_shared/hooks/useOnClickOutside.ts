import { useEffect } from "react"
export function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  Callback: () => unknown
) {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const refCurrent = ref.current
      if (
        refCurrent != null &&
        e.target instanceof Node &&
        refCurrent.contains(e.target) === false
      ) {
        Callback()
      }
    }
    document.addEventListener("click", handler)
    return () => {
      document.removeEventListener("click", handler)
    }
  }, [ref, Callback])
}
