import classes from "./error.module.scss";
import { JSX } from "react";
import Header from "../../4_widgets/header";
import Footer from "../../4_widgets/footer";

export default function ErrorContent(): JSX.Element {
  return (
    <div className={classes.mainBlock}>
      <Header />
      <h1 className={`text-center h1 ` + classes.contentBlock}> Error</h1>
      <Footer />
    </div>
  );
}
