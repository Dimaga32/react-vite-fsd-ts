import { useState } from "react"
export function useToggle(defaultValue: boolean) {
  const [state, setState] = useState<boolean>(defaultValue)
  function setToggleState(newValue?: boolean) {
    if (newValue !== undefined) setState(newValue)
    else setState(prev => !prev)
  }
  return [state, setToggleState]
}
