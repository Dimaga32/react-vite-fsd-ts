import { JSX } from "react"
import Main from "../../2_pages/main"
import Error from "../../2_pages/error"
import Books from "../../2_pages/books"
import Histology from "../../2_pages/histology"
import Anatomy from "../../2_pages/anatomy"
import Biology from "../../2_pages/biology"
import { Navigate } from "react-router"

type TypeRout = {
  url: string
  element: JSX.Element
}
export const MassiveRouts: TypeRout[] = [
  {
    url: "/error",
    element: <Error />,
  },
  {
    url: `/main`,
    element: <Main />,
  },
  {
    url: `/biology`,
    element: <Biology />,
  },
  {
    url: `/histology`,
    element: <Histology />,
  },
  {
    url: `/anatomy`,
    element: <Anatomy />,
  },
  {
    url: `/books`,
    element: <Books />,
  },
  {
    url: "/",
    element: <Navigate to={"/main"} replace />,
  },
  {
    url: "*",
    element: <Navigate to={"/error"} replace />,
  },
]
