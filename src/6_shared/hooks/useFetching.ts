import { useState, useEffect, DependencyList } from "react"
export default function useFetching<T = unknown>(
  url: string,
  deps: DependencyList
): {
  isLoading: boolean
  data: T | null
  error: Error | null
} {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [data, setData] = useState<T | null>(null)
  useEffect(() => {
    setIsLoading(true)
    setError(null)
    setData(null)
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) {
          throw new Error("fetch failed")
        }
        setData(await res.json())
      } catch (err) {
        if (err instanceof Error) {
          setError(err)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [...deps, url])
  return { isLoading, data, error }
}
