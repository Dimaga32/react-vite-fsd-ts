import {JSX, ReactNode} from "react";
import MyBurgerButtonContent from "./MyBurgerButton";

export default function MyBurgerButton(props:{
    id: string;
    className?: string;
    children: ReactNode;
}):JSX.Element {
    return <MyBurgerButtonContent
                        id={props.id}
                        className={props.className}>
        {props.children}
    </MyBurgerButtonContent>
}