import React from 'react';

import styles from "./About.module.css"
import {Title, Wrapper} from "../../components";
import {motion} from "framer-motion"


const About = ():JSX.Element => {
    return (
        <Wrapper id='About'>
            <motion.div className={styles.container}
                        initial={{opacity: 0, x: 350}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once:true}}
                        transition={{duration: 1}}>
                <Title className={'text-center'}>About</Title>
                <div className={'font-bold sm:text-3xl text-[22px] text-right whitespace-pre-line flex items-center'}>
                    Nice to meet you. Proficient with React. I look forward to a good offer from you.
                </div>
                <div className={'text-left flex items-center pt-2 sm:text-[16px] text-[12px] text-justify'}>
                    Creative Front end Developer.
                    Adept at building responsive web applications from front to back. Passionate about learning new
                    technologies, dringing ideas to life, and working with dedicated teams to build efficient and robust
                    applications suited to the user’s needs

                </div>
            </motion.div>
        </Wrapper>
    );
};

export {About};