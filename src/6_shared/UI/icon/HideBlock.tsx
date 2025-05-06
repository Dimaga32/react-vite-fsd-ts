import { JSX } from "react"
import classes from "./hideblock.module.scss"

export default function IconContent(props: {
  children?: React.ReactNode
  className?: string
  href?: string
  src?: string
  alt?: string
}): JSX.Element {
  return (
    <button
      className={`${props.className} block text-center w-auto cursor-pointer`}
    >
      <a href={props.href} target="_blank" className={classes.unset}>
        <img
          className={`${props.className} w-auto`}
          src={props.src}
          alt={props.alt}
        />
        {props.children}
      </a>
    </button>
  )
}
