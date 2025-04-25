import { useEffect, useState } from "react"

const breakpoints: Record<string, string> = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
  default: "(min-width: 1000000px)",
}

export function useBreakpointMatch(size: string | undefined): boolean {
  if(typeof size === "string") return true
  const query: string = breakpoints[size ?? "default"]
  const [matches, setMatches] = useState<boolean>(
    (): boolean => window.matchMedia(query).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = () => setMatches(mql.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [query])

  return matches
}
