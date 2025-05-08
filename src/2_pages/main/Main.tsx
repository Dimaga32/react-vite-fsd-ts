import classes from "./main.module.scss"
import { JSX } from "react"
import Footer from "../../3_widgets/footer"
import Header from "../../3_widgets/header"
import MainWidget from "../../3_widgets/mainWidget"
export default function MainContent(): JSX.Element {
  return (
    <div className={classes.mainBlock}>
      <Header />
      <MainWidget />
      <Footer IsDownDiv={false} />
    </div>
  )
}
