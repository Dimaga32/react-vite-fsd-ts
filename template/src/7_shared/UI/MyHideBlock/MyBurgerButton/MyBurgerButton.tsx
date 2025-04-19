import {JSX, ReactNode} from "react";
import classes from "./myburgerbutton.module.scss";
import { toggleById } from '../VisibilityRegistry';
import {TypeBrakepoint} from "../../Brakepoints";
import {useBreakpointMatch} from "../../../hooks/useMediaQuery";


interface ToggleButtonProps {
    id: string;
    className?: string;
    children: ReactNode;
    dataFoldingSize?: TypeBrakepoint;
}

export default function MyBurgerButtonContent(props:ToggleButtonProps):JSX.Element{
    const {id, className,children, dataFoldingSize} = props;
    const isWide:boolean = useBreakpointMatch(dataFoldingSize)
    const handleClick = () => {
        toggleById(id);
    };

    return (!isWide?(
        <button className={`${className} ${classes.burger}`} onClick={handleClick}>
            {children}
        </button>):<></>
    );
}
