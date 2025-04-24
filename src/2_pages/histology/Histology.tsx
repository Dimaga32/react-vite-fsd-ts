import classes from "./histology.module.scss"
import { JSX } from "react"
import Footer from "../../3_widgets/footer"
import Header from "../../3_widgets/header"
export default function HistologyContent(): JSX.Element {
  return (
    <div className={classes.mainBlock}>
        <Header />
        <h1 className={`text-6xl text font-bold ` + classes.contentBlock}>
            Histology
        </h1>
        <Footer />
    </div>
  )
}
