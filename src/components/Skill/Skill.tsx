import {DetailedHTMLProps, HTMLAttributes} from 'react';

import styles from "./Skill.module.css"
import cn from "classnames";
import {motion} from "framer-motion"

export interface ISkillProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon: string;
    title: string;
}


const Skill = ({icon, title, className, ...props}: ISkillProps): JSX.Element => {

    return (
        <motion.div
            whileHover={{scale: 1.1}} transition={{duration: 0.4}}
            className={cn(className, styles.container, 'shadow-lg shadow-[#040c16]')}>
            <img className={styles.img} src={icon} alt={title}/>
            {title}
        </motion.div>
    );
};

export {Skill};