import { JSX } from "react";
import classes from "./header.module.scss";

export default function HeaderContent(): JSX.Element {
  return (
    <header className={`${classes.header} text-2xl text-white bg-[#1356a5] pr-[2vw] pl-[2vw] fixed w-[100vw] h-[60px]`}>

    </header>
  );
}
