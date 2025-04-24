import { JSX } from "react"
import IconContent from "./HideBlock"

export default function Icon(props: {
  children?: string
  className?: string
  href?: string
  src?: string
  alt?: string
}): JSX.Element {
  return (
    <IconContent
      src={props.src}
      href={props.href}
      alt={props.alt}
      className={props.className}
    >
      {props.children}
    </IconContent>
  )
}
