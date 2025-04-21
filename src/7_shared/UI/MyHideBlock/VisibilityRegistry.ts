export type ToggleFunction = () => void

const toggleRegistry = new Map<string, ToggleFunction>()

export function registerToggle(id: string, toggleFn: ToggleFunction): void {
  toggleRegistry.set(id, toggleFn)
}

export function unregisterToggle(id: string): void {
  toggleRegistry.delete(id)
}

export function toggleById(id: string): void {
  const toggleFn = toggleRegistry.get(id)
  if (toggleFn) {
    toggleFn()
  } else {
    console.warn(`Toggle-функция для компонента с id "${id}" не найдена.`)
  }
}
