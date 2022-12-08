import React, {DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState} from 'react';

import styles from "./Project.module.css"
import cn from "classnames"
import {motion} from "framer-motion";
import {IData} from "../../helpers/menu";

export interface IProject extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    project: IData;
}


const Project = ({project, className, ...props}: IProject): JSX.Element => {

    const {id, image, mobileImage, name, git, link} = project;
    const [widthScreen,setWidthScreen] = useState<number>(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWidthScreen(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return ()=> window.removeEventListener('resize', handleResize)
    },)

    return (
        <div className={cn(className, styles.sliderWrap, 'w-full  flex-shrink-0 snap-center')} {...props}>
            <div className={cn('relative flex items-center justify-center flex-col')}>
                <img className={cn({
                    [styles.mobile]: widthScreen <= 768,
                    [styles.laptop]: widthScreen > 768
                })}

                     src={widthScreen <= 768 ? mobileImage : image} alt={name}/>
                <div className={cn(styles.block, {
                    [styles.blockHidden]: widthScreen <= 768,
                })}>
                    <a href={git} target="_blank">
                        <button className={styles.button}>GitHub - code</button>
                    </a>
                    <a href={link} target="_blank">
                        <button className={styles.button}>Live project</button>
                    </a>
                </div>
                <div
                    className={styles.title}>
                    <span className={'underline decoration-[#bf42ce]/60'}>Case study {id} of 3: </span>
                    {name}
                </div>
            </div>
        </div>
    );
};

export {Project};