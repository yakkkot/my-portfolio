import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

import styles from "./NavLink.module.css"
import {Link} from "react-scroll"

export interface ILink extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    children: ReactNode;
    to: string;
    click?: () => void
}


const NavLink = ({children, to, click, ...props}: ILink): JSX.Element => {

    return (
        <li  className={styles.li} {...props}>
            <Link onClick={click} to={to} smooth={true} duration={500}>
                {children}
            </Link>
        </li>
    );
};

export {NavLink};