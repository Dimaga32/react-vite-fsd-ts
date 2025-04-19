import {JSX} from "react";
import MyButtonContent from "./MyButton";

export default function MyButton(props:{
    children?:string,
    className?:string,
    href?:string,

}):JSX.Element {
    return <MyButtonContent
        href={props.href}
        className={props.className}>
        {props.children}
    </MyButtonContent>
}