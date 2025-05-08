import { JSX } from "react"
//import classes from "./myButton.module.scss"
import { Button } from "@mui/material"

export default function MyButtonContent({
  width,
}: {
  width?: string
}): JSX.Element {
  if (width !== undefined) {
    return (
      <a href={import.meta.env.FRONTEND_URL + "/form"}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2c2c2c",
            borderRadius: "8px",
            padding: "6px 24px",
            textTransform: "none",
            width: `${width ? width : ""}`,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#1e1e1e",
              boxShadow: "none",
            },
            "@media (min-width:640px)": {
              padding: "6px 36px",
            },
          }}
        >
          Contact us
        </Button>
      </a>
    )
  }

  return (
    <a href={import.meta.env.FRONTEND_URL + "/form"}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#2c2c2c",
          borderRadius: "8px",
          padding: "6px 24px",
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#1e1e1e",
            boxShadow: "none",
          },
          "@media (min-width:640px)": {
            padding: "6px 36px",
          },
        }}
      >
        Contact us
      </Button>
    </a>
  )
}
