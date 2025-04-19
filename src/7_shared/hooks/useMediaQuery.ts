import { useEffect, useState } from 'react'

const breakpoints: Record<string, string> = {
    'sm': '(min-width: 640px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 1024px)',
    'xl': '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
}

export function useBreakpointMatch(size: string | undefined): boolean {
    if(!size){return false}
    const query:string = breakpoints[size]
    const [matches, setMatches] = useState<boolean>(():boolean => window.matchMedia(query).matches)

    useEffect(() => {
        const mql = window.matchMedia(query)
        const handler = () => setMatches(mql.matches)
        mql.addEventListener('change', handler)
        return () => mql.removeEventListener('change', handler)
    }, [query])

    return matches
}
