import {JSX, ReactNode} from "react";
import MyHideBlockContent from "./MyHideBlock";


export default function MyHideBlock(props:{
    id: string;
    children: ReactNode;
    className?: string;
}):JSX.Element {
    return <MyHideBlockContent
                        id={props.id}
                        className={props.className}>
        {props.children}
    </MyHideBlockContent>
}