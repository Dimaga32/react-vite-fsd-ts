import classes from "./main.module.scss"
import { JSX } from "react"
import Footer from "../../3_widgets/footer"
import Header from "../../3_widgets/header"
export default function MainContent(): JSX.Element {
  return (
    <div className={classes.mainBlock}>
      <Header />
      <h1 className={`text-6xl text font-bold ` + classes.contentBlock}>
        Main
      </h1>
      <Footer />
    </div>
  )
}
