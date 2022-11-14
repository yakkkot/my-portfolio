import React, {DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState} from 'react';

import styles from "./Header.module.css"

import 'aos/dist/aos.css';
import {NavLink, LeftNavigation, MenuIcon} from "../../components";
import {menu} from "../../helpers/menu";
import Logo from "../../Assets/Images/logo1.png"
import cn from "classnames";
import {motion} from "framer-motion";

export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


const Header = ({className,...props}: IProps): JSX.Element => {
    const [menuShow,setMenuShow] = useState<boolean>(false)
    const [shadow, setShadow] = useState<boolean>(false);
    const close = () => setMenuShow(false);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
            },
        },
        closed:{
            opacity: 0,
            x: '100%',
            transition: {
                stiffness: 20,
            },
        }
    };

    useEffect(()=>{
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);

        return ()=> window.removeEventListener('scroll', handleShadow);
    }, []);

    return (
        <>
            <motion.div initial={{opacity: 0, y: -300}}
                        animate={{opacity: 1, y: 0}}>
                <div className={cn(styles.container, 'snap-start ease-in-out duration-300', {
                    'shadow-2xl': shadow
                })} {...props} >
                    <a className={'z-50'} href={'/'}>
                        <img width={70} src={Logo} alt=""/>
                    </a>
                    <ul className={styles.ul}>
                        {menu.map((m, i) => <NavLink key={i} to={m}>{m}</NavLink>)}
                    </ul>
                    <MenuIcon className={styles.openMobile} onClick={() => setMenuShow(true)} icon={'menu'}
                              appearance={'primary'}/>

                    <motion.div
                        className={styles.mobileMenu}
                        variants={variants}
                        initial={'closed'}
                        animate={menuShow ? 'opened' : 'closed'}>
                        <ul className={styles.ulMobile}>
                            {menu.map((m, i) => <NavLink click={close} key={i} to={m}>{m}</NavLink>)}
                        </ul>
                        <MenuIcon onClick={close} className={styles.menuClose} icon={'close'}
                                  appearance={'white'}/>
                        <LeftNavigation className={styles.leftNav}/>
                    </motion.div>
                </div>
            </motion.div>
            <LeftNavigation/>
        </>
    );
};

export {Header};