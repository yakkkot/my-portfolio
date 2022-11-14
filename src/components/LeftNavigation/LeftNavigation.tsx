
import styles from "./LeftNavigation.module.css"

import {BsFillPersonLinesFill, BsTelegram} from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {DetailedHTMLProps, HTMLAttributes} from "react";
import cn from "classnames";

export interface ILeft extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{}


const LeftNavigation = ({className,...props}:ILeft): JSX.Element => {

    return (
        <ul className={cn(styles.container,className)} {...props}>
            <li className={`${styles.li} px-2 w-[150px] h-[60px] bg-blue-600 flex items-center gap-4 text-[20px]`}>
                <a href="https://www.linkedin.com/in/yakkkot" target="_blank"
                   className='flex items-center justify-between w-full'>LinkedIn
                    <FaLinkedin color={'white'} size={30}/>
                </a>
            </li>
            <li className={`${styles.li} px-2 w-[150px] h-[60px] bg-gray-700 flex items-center gap-4 text-[20px]`}>
                <a href="https://github.com/yakkkot" target="_blank"
                   className='flex items-center justify-between w-full'>GitHub
                    <FaGithub color={'white'} size={30}/>
                </a>
            </li>
            <li className={`${styles.li} px-2 w-[150px] h-[60px]  bg-blue-500 flex items-center gap-4 text-[20px]`}>
                <a href="https://t.me/yakkkot" target="_blank" className='flex items-center justify-between w-full'>Telegram
                    <BsTelegram color={'white'} size={30}/>
                </a>
            </li>
            <li className={`${styles.li} px-2 w-[150px] h-[60px]  bg-violet-700 flex items-center gap-4 text-[20px]`}>
                <a href="https://resume.io/r/DpMLvp5CE" target="_blank"
                   className='flex items-center justify-between w-full'>Resume
                    <BsFillPersonLinesFill color={'white'} size={30}/>
                </a>
            </li>
        </ul>

    );
};

export {LeftNavigation};