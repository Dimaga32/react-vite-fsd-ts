import classes from "./main.module.scss";
import { JSX } from "react";
import Footer from "../../4_widgets/footer";
import Header from "../../4_widgets/header";
export default function MainContent(): JSX.Element {
  return (
    <div className={classes.mainBlock}>
      <Header />
      <h1 className={`fs-1 ` + classes.contentBlock}>Main</h1>
      <Footer />
    </div>
  );
}
