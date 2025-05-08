import { JSX } from "react"
import Main from "../../2_pages/main"
import Form from "../../2_pages/Form"
import { Navigate } from "react-router"
type TypeRout = {
  url: string
  element: JSX.Element
}
export const MassiveRouts: TypeRout[] = [
  {
    url: `/main`,
    element: <Main />,
  },
  {
    url: `/form`,
    element: <Form />,
  },
  {
    url: "*",
    element: <Navigate to={"/main"} replace />,
  },
]
