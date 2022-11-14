import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

import styles from "./IconText.module.css"
import cn from "classnames";
import {IconName, icons} from "../../helpers/menu";

export interface IIConText extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    icon: IconName;
    color?: 'green' | 'red' | 'primary',
}


const IconText = ({icon,color='primary', children, className, ...props}: IIConText): JSX.Element => {

    const IconComp = icons[icon];

    return (
        <div className={cn(className, styles.content)} {...props}>
            <IconComp className={cn(styles.icon,{
                [styles.primary]: color === 'primary',
                [styles.red]: color === 'red',
                [styles.green]: color === 'green'
            })}/>
            {children}
        </div>
    );
};

export {IconText};