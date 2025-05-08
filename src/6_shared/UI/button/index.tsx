import { JSX } from "react"
import MyButtonContent from "./MyButton"

export default function MyButton({ width }: { width?: string }): JSX.Element {
  return <MyButtonContent width={width} />
}
