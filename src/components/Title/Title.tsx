import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

import styles from "./TItle.module.css"
import cn from "classnames";

export interface ITitle extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}


const Title = ({children, className, ...props}: ITitle): JSX.Element => {

    return (
        <div className={cn(className, styles.about,'text-4xl font-bold')} {...props}>
            <p className='border-b-4 border-b-[#bf42ce] inline'>
                {children}
            </p>
        </div>
    );
};

export {Title};