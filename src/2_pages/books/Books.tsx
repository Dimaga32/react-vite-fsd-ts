import classes from "./books.module.scss"
import { JSX } from "react"
import Footer from "../../3_widgets/footer"
import Header from "../../3_widgets/header"
export default function BooksContent(): JSX.Element {
  return (
    <div className={classes.mainBlock}>
      <Header />
      <div className={`h1 text-center ` + classes.contentBlock}>Main</div>
      <Footer />
    </div>
  )
}
