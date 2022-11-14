import React from 'react';
import styles from "./Footer.module.css"


const Footer = ():JSX.Element => {
    return (
        <div className={`${styles.footer} border-t-2 border-t-[#bf42ce] snap-end`}>
                <div>k0tjeee777@gmail.com</div>
                <div>© 2022 Yaroslav Kot</div>
        </div>
    );
};

export {Footer};