import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

import styles from "./Wrapper.module.css"
import cn from "classnames"

export interface IWrapper extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
}


export const Wrapper = ({children, className,...props}: IWrapper): JSX.Element => {

    return (
        <div className={cn(className,styles.wrapper)} {...props} >
            {children}
        </div>
    );
};
