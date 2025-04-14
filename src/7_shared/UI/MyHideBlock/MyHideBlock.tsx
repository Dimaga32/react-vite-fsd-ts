import { useEffect, useState, ReactNode, JSX} from 'react';
import { registerToggle, unregisterToggle } from './VisibilityRegistry';
import classes from "./myhideblock.module.scss";

interface MyHideBlockContentProps {
    id: string;
    children: ReactNode;
    className?: string;
}
export default function MyHideBlockContent(
    props:MyHideBlockContentProps):JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    const { id, children, className }=props

    useEffect(() => {
        registerToggle(id, toggleVisibility);
        return () => {
            unregisterToggle(id);
        };
    }, [id]);

    return (
        <div className={`my-component ${classes.hideblock} ${className}`}>
            {isVisible && <div className="my-component-content">{children}</div>}
        </div>
    );
}

