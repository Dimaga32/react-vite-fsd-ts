import { useCallback, useEffect, useState, ReactNode, JSX } from "react"
import { registerToggle, unregisterToggle } from "./VisibilityRegistry"
import classes from "./myhideblock.module.scss"
import MyBurgerButtonInner from "./MyBurgerButton"
import { TypeBrakepoint } from "../Brakepoints"
import { useBreakpointMatch } from "../../hooks/useMediaQuery"

interface MyHideBlockContentProps {
  id: string
  children: ReactNode
  className?: string
  dataFoldingSize?: TypeBrakepoint
}

function MyHideBlockContent(props: MyHideBlockContentProps): JSX.Element {
  const { id, children, className, dataFoldingSize } = props
  const isWide: boolean = useBreakpointMatch(dataFoldingSize)

  const [isActive, setIsActive] = useState<boolean>(false)

  const toggleVisibility = useCallback(() => {
    setIsActive(prev => !prev)
  }, [])

  useEffect(() => {
    registerToggle(id, toggleVisibility)
    return () => {
      unregisterToggle(id)
    }
  }, [id, toggleVisibility])
  return isActive || isWide ? (
    <div className={`my-component ${classes.hideblock} ${className}`}>
      {children}
    </div>
  ) : (
    <></>
  )
}

interface InterfaceMyHideBlockContentProps
  extends React.FC<MyHideBlockContentProps> {
  BurgerButton: typeof MyBurgerButtonInner
}

;(MyHideBlockContent as InterfaceMyHideBlockContentProps).BurgerButton =
  MyBurgerButtonInner
export default MyHideBlockContent as InterfaceMyHideBlockContentProps
