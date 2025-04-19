import {JSX} from "react";
import classes from "./myButton.module.scss";

export default function MyButtonContent(
    props:{
        children?:string,
        className?:string,
        href?:string,

    }):JSX.Element {
    return <button className={`${classes.button} ${props.className}`}>
        <a href={props.href}  className={classes.unset}>
            {props.children}
        </a>
    </button>
}