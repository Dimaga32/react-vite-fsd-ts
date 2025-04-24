import classes from "./error.module.scss"
import { JSX } from "react"
import Header from "../../3_widgets/header"
import Footer from "../../3_widgets/footer"

export default function ErrorContent(): JSX.Element {
  return (
    <div className={classes.mainBlock}>
      <Header />
      <h1 className={`text-6xl text font-bold ` + classes.contentBlock}>
        {" "}
        Error
      </h1>
      <Footer />
    </div>
  )
}
