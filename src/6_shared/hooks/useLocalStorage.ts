import { useState, useEffect } from "react"
export function useLocalStorage<T = unknown>(
  name: string,
  initialValue: T | null
) {
  const storedRaw = localStorage.getItem(name)

  const parseStoredValue = (el: string | null): T | null => {
    let ans = null
    if (el === null) {
      return null
    }
    try {
      ans = JSON.parse(el)
    } catch (error) {
      console.error(error)
    }
    return ans
  }

  const storaged: T | null = parseStoredValue(storedRaw)

  if (
    JSON.stringify(storaged) !== JSON.stringify(initialValue) &&
    storaged !== null
  ) {
    console.error("saved in localStorage value is different than initial")
  }

  const [value, setValue] = useState<T | null>(
    storaged !== null ? storaged : initialValue
  )

  const handler = () => {
    const newRaw = localStorage.getItem(name)
    const possibleAnotherStoraged = parseStoredValue(newRaw)
    if (
      possibleAnotherStoraged !== null &&
      JSON.stringify(possibleAnotherStoraged) !== JSON.stringify(value)
    ) {
      setValue(possibleAnotherStoraged)
    }
  }

  useEffect(() => {
    window.addEventListener("storage", handler)
    return () => {
      window.removeEventListener("storage", handler)
    }
  }, [name])

  useEffect(() => {
    if (value !== null) localStorage.setItem(name, JSON.stringify(value))
  }, [name, value])

  const removeFunc = () => {
    localStorage.removeItem(name)
    setValue(null)
  }
  return { value, setValue, removeFunc }
}
