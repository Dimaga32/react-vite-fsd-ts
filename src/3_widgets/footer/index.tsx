import FooterContent from "./Footer"
import { JSX } from "react"
export default function Footer({
  IsDownDiv,
}: {
  IsDownDiv?: boolean
}): JSX.Element {
  return <FooterContent IsDownDiv={IsDownDiv} />
}
