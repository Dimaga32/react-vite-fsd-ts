import {JSX, ReactNode} from "react";
import classes from "./myburgerbutton.module.scss";
import { toggleById } from '../VisibilityRegistry';

interface ToggleButtonProps {
    id: string;
    className?: string;
    children: ReactNode;
}

export default function MyBurgerButtonContent(props:ToggleButtonProps):JSX.Element{
    const {id, className,children} = props;
    const handleClick = () => {
        toggleById(id);
    };

    return (
        <button className={`${className} ${classes.burger}`} onClick={handleClick}>
            {children}
        </button>
    );
}
