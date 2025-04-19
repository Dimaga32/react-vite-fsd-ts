import { JSX } from "react";
import Main from "../../2_pages/main";
import Error from "../../2_pages/error";
import Books from "../../2_pages/books";
import { Navigate } from "react-router";
type TypeRout = {
  url: string;
  element: JSX.Element;
};
export const MassiveRouts: TypeRout[] = [
  {
    url: "/error",
    element: <Error />,
  },
  {
    url: `/`,
    element: <Main />,
  },
  {
    url: `/books`,
    element: <Books />,
  },
  {
    url: "*",
    element: <Navigate to={"/error"} replace />,
  },
];
