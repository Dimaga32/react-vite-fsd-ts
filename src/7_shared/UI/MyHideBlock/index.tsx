import { JSX, ReactNode } from "react"
import MyHideBlockContent from "./MyHideBlock"
import { TypeBrakepoint } from "../Brakepoints"

function MyHideBlock(props: {
  id: string
  children: ReactNode
  className?: string
  dataFoldingSize?: TypeBrakepoint
}): JSX.Element {
  return (
    <MyHideBlockContent
      dataFoldingSize={props.dataFoldingSize}
      id={props.id}
      className={props.className}
    >
      {props.children}
    </MyHideBlockContent>
  )
}
MyHideBlock.BurgerButton = MyHideBlockContent.BurgerButton

export default MyHideBlock
