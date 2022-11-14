import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

import styles from "./Container.module.css"
import cn from "classnames"

export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
}


const Container = ({children, className,...props}: IProps): JSX.Element => {

    return (
        <div className={cn(className,styles.container)} {...props} >
            {children}
        </div>
    );
};

export {Container};