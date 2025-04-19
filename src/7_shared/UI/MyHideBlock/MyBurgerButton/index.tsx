import {JSX, ReactNode} from "react";
import MyBurgerButtonContent from "./MyBurgerButton";
import {TypeBrakepoint} from "../../Brakepoints";

export default function MyBurgerButtonInner(props:{
    id: string;
    className?: string;
    children: ReactNode;
    dataFoldingSize?: TypeBrakepoint;
}):JSX.Element {
    return <MyBurgerButtonContent
                        dataFoldingSize={props.dataFoldingSize}
                        id={props.id}
                        className={props.className}>
        {props.children}
    </MyBurgerButtonContent>
}